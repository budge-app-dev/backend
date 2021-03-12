const express = require('express')
const User = require('./user-model')
const loginValidation = require('../middleware/loginValidation')
const bcryptjs = require("bcryptjs");
const makeToken = require("../middleware/makeToken");

const router = express.Router()

router.post('/register_user', (req, res) => {
    const credentials = req.body;
    const newUser = {
        ...credentials
    }
    const hash = bcryptjs.hashSync(newUser.password, 10);
    newUser.password = hash;
    
    User.create(newUser)
        .then((data) => {
            res.status(201).json({ message: `Successfully created! ${data}` });
        })
        .catch((err) => {
            res.status(400).json({ message: "Error registering user", error: err.message });
        });
})

router.post('/login', loginValidation, (req, res) => {
    User.getByUsername(req.body.username)
        .then((user) => {
            console.log(user)
            if (bcryptjs.compareSync(req.body.password, user[0].password)) {
            const token = makeToken(user[0]);
            res.status(200).json({
                message: "Welcome to our API, " + user[0].username,
                id: user[0].user_id,
                token,
            });
            } else {
            res.status(401).json("invalid credentials");
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Error login in", error: err.message });
        });
})

module.exports = router
