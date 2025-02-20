// create connectiuon to db in this file
require('dotenv').config();

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
        console.log('err connecting to db', err.stack);
    } else {
        console.log('connected to db');
    }
})

module.exports = client;