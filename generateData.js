const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfigs = {
  users: { host: 'localhost', user: 'root', password: '', database: 'dda_users' },
  debt: { host: 'localhost', user: 'root', password: '', database: 'dda_debt' },
  history: { host: 'localhost', user: 'root', password: '', database: 'dda_history' },
  mix: { host: 'localhost', user: 'root', password: '', database: 'dda_mix' },
  payments: { host: 'localhost', user: 'root', password: '', database: 'dda_payments' }
};

const usedNationalIds = new Set();

function generateNationalId() {
  let id;
  do {
    id = Math.floor(1e13 + Math.random() * 9e12).toString(); // 14-digit national ID
  } while (usedNationalIds.has(id));
  usedNationalIds.add(id);
  console.log("🚀 ~ generateNationalId ~ id:", id)
  
  return id;
}

async function generateRandomData() {
  const connections = {};
  try {
    for (const [key, config] of Object.entries(dbConfigs)) {
      connections[key] = await mysql.createConnection(config);
      console.log(`Connected to ${key} DB`);
    }

    for (let i = 1; i <= 10; i++) {
      const national_id = generateNationalId();
      console.log("🚀 ~ generateRandomData ~ national_id:", national_id)
      const name = `User ${i}`;
      const age = Math.floor(Math.random() * 41) + 20;

      try {
        const [userResult] = await connections.users.query(
          'INSERT INTO users (national_id, name, age) VALUES (?, ?, ?)',
          [national_id, name, age]
        );

        // Insert only if user creation succeeded
        if (userResult.affectedRows === 1) {
          const credit_limit = Math.floor(Math.random() * 50000) + 10000;
          const used = Math.floor(Math.random() * credit_limit);

          await connections.debt.query(
            'INSERT INTO credit (national_id, used, credit_limit) VALUES (?, ?, ?)',
            [national_id, used, credit_limit]
          );

          const acc_age = Math.floor(Math.random() * 10) + 1;
          const max_age = 10;

          await connections.history.query(
            'INSERT INTO history (national_id, acc_age, max_age) VALUES (?, ?, ?)',
            [national_id, acc_age, max_age]
          );

          const used_credit = Math.floor(Math.random() * 5) + 1;
          const total_credit = 5;

          await connections.mix.query(
            'INSERT INTO credits_used (national_id, used_credit, total_credit) VALUES (?, ?, ?)',
            [national_id, used_credit, total_credit]
          );

          const total = Math.floor(Math.random() * 21) + 10;
          const on_time = Math.floor(Math.random() * total);

          await connections.payments.query(
            'INSERT INTO payments (national_id, on_time, total) VALUES (?, ?, ?)',
            [national_id, on_time, total]
          );

          console.log(`✔️  Data generated for national_id=${national_id}`);
        }
      } catch (err) {
        console.error(`❌  Failed for national_id=${national_id}:`, err.message);
      }
    }

    console.log('\n🎉 Random data generation completed!');
  } catch (err) {
    console.error('Error during data generation process:', err);
  } finally {
    await Promise.all(Object.values(connections).map((conn) => conn.end()));
    console.log('All DB connections closed.');
  }
}

generateRandomData();
