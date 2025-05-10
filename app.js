const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Database configurations
const dbConfigs = {
  users: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dda_users'
  },
  debt: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dda_debt'
  },
  history: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dda_history'
  },
  mix: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dda_mix'
  },
  payments: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dda_payments'
  }
};

// Create database connections
const createConnections = async () => {
  const connections = {};
  for (const [key, config] of Object.entries(dbConfigs)) {
    connections[key] = await mysql.createConnection(config);
  }
  return connections;
};

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/calculate-score', async (req, res) => {
  try {
    const { national_id } = req.body;
    const connections = await createConnections();

    // Get user data from all databases
    const [user] = await connections.users.query('SELECT * FROM users WHERE national_id = ?', [national_id]);
    if (!user || user.length === 0) {
      // Close connections before sending response
      Object.values(connections).forEach(conn => conn.end());
      return res.status(404).json({
        success: false,
        error: 'User not found',
        message: 'No user found with this National ID. Please check and try again.'
      });
    }

    const [debt] = await connections.debt.query('SELECT * FROM credit WHERE national_id = ?', [national_id]);
    const [history] = await connections.history.query('SELECT * FROM history WHERE national_id = ?', [national_id]);
    const [mix] = await connections.mix.query('SELECT * FROM credits_used WHERE national_id = ?', [national_id]);
    const [payments] = await connections.payments.query('SELECT * FROM payments WHERE national_id = ?', [national_id]);

    // Calculate scores
    const paymentScore = payments.length > 0 ? (payments[0].on_time / payments[0].total) * 100 : 0;
    const debtScore = debt.length > 0 ? (1 - (debt[0].used / debt[0].credit_limit)) * 100 : 0;
    const historyScore = history.length > 0 ? (history[0].acc_age / history[0].max_age) * 100 : 0;
    const mixScore = mix.length > 0 ? (mix[0].used_credit / mix[0].total_credit) * 100 : 0;

    // Calculate final score
    const finalScore = (
      0.35 * paymentScore +
      0.30 * debtScore +
      0.15 * historyScore +
      0.20 * mixScore
    );

    let min =300
    let max = 850

    // Scale the score
    const scaledScore = min + ((finalScore / 100) * (max - min));

    // Close all connections
    Object.values(connections).forEach(conn => conn.end());

    res.json({
      success: true,
      score: Math.round(scaledScore * 100) / 100,
      user: {
        name: user[0].name,
        age: user[0].age
      },
      details: {
        paymentScore,
        debtScore,
        historyScore,
        mixScore,
        finalScore
      }
    });
  } catch (error) {
    console.error('Error calculating score:', error);
    res.status(500).json({
      success: false,
      error: 'Error calculating score',
      message: 'An error occurred while calculating the score. Please try again.'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 