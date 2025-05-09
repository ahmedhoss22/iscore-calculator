# Credit Score Calculator

A distributed database system for calculating credit scores (iScore) based on multiple factors. The system connects to multiple MySQL databases to gather user credit information and calculate a comprehensive credit score.

## Features

- Distributed database architecture
- Real-time credit score calculation
- Modern web interface
- Detailed score breakdown
- Error handling and user feedback

## Score Calculation Factors

The credit score is calculated based on four main factors:

1. **Payment History (35%)**

   - Tracks on-time payment rate
   - Formula: (on-time payments / total payments) \* 100

2. **Outstanding Debt (30%)**

   - Measures credit utilization
   - Formula: (1 - (used credit / credit limit)) \* 100

3. **Credit History Age (15%)**

   - Considers account age
   - Formula: (account age / maximum possible age) \* 100

4. **Credit Mix (20%)**
   - Evaluates diversity of credit types
   - Formula: (used credit types / total possible types) \* 100

Final score is scaled to a range of 300-850.

## Database Structure

The system uses five separate databases:

1. **dda_users**

   - Table: users
   - Columns: national_id, name, age

2. **dda_debt**

   - Table: credit
   - Columns: national_id, used, credit_limit

3. **dda_history**

   - Table: history
   - Columns: national_id, acc_age, max_age

4. **dda_mix**

   - Table: credits_used
   - Columns: national_id, used_credit, total_credit

5. **dda_payments**
   - Table: payments
   - Columns: national_id, on_time, total

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd credit-score-calculator
```

2. Install dependencies:

```bash
npm install
```

3. Set up MySQL databases:

   - Create the five required databases (dda_users, dda_debt, dda_history, dda_mix, dda_payments)
   - Ensure MySQL server is running

4. Generate test data:

```bash
node generateData.js
```

## Running the Application

Development mode (with auto-reload):

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

1. Open the web interface
2. Enter a National ID
3. Click "Calculate Score"
4. View the calculated credit score and breakdown

## Error Handling

The system provides clear feedback for:

- Non-existent users
- Database connection issues
- Calculation errors

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS (Embedded JavaScript)
- Bootstrap 5
- Nodemon (for development)

## Development

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `node generateData.js` - Generate test data

## License

ISC
