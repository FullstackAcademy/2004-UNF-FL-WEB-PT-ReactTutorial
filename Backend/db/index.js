// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'localhost/reacttutorial'
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

client.connect()
// database methods

// export
module.exports = {
  client,
}