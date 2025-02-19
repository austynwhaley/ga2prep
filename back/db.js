// create connectiuon to db in this file

const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '5424',
    database:'insurance_db'
});

client.connect((err) => {
    if (err) {
        console.log('err connecting to db', err.stack);
    } else {
        console.log('connected to db');
    }
})

module.exports = client;