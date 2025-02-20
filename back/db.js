require('dotenv').config();
console.log(process.env.DB_USER);
const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect((err) => {
    if (err) {
        console.error('Error connecting to the database', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

process.on('SIGINT', async () => {
    await client.end();
    console.log('Database connection closed');
    process.exit(0);
});

module.exports = client;
