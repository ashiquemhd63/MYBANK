
const express = require('express');
const accounts = require('./Controllers/accountController');

const router = express.Router();


router.post('/register', accounts.register);
router.post('/login', accounts.login);
router.post('/otp/:id',accounts.otp)

module.exports = router;