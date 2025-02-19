const express = require('express');
const client = require('../db');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req,res) => {
    try {
        const {username, email, password } = req.body;

        const setRounds = 10;
        const hasher = await bcrypt.hash(password, setRounds);

        const register = `INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *`
        const vals = [username, email, hasher];

        const dbRes = await client.query(register, vals);

        res.status(201).json({ message: 'User created', user: dbRes.rows[0] })

    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Database query failed' });
    }
    
})

module.exports = router;