const express = require('express');
const client = require('../db');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {

        const { username, password } = req.body;

        const dbQuery = `SELECT * FROM users WHERE username = $1`
        const searchRes = await client.query(dbQuery, [username]);

        if (searchRes.rows.length === 0){
            return res.status(401).json({ error: 'Invalid username or password'});
        }

        const user = searchRes.rows[0];

        const passMatch = await bcrypt.compare(password, user.password);

        if (!passMatch) {
            return res.status(401).json({ error: 'Invalid username or password'})
        }

        res.status(200).json({ sucess: true, message: 'Login sucessful', user: {id: user.id, username: user.username}})

    } catch (err) {

        console.error('Login error:', err);
        res.status(500).json({ error: 'Server error' });
    }

})

module.exports = router;