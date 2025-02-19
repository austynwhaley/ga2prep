const express = require('express');
const client = require('../db');
const router = express.Router();

const selectAll = 'SELECT * FROM claims';

router.get('/', (req, res) => {
    client.query(selectAll, (err, dbRes) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).json({ error: 'Database query failed' });
        } else {
            res.json(dbRes.rows);
        }
    });
});

module.exports = router;
