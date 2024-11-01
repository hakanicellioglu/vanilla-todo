const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const path = require('path');


// GET /signup - Kayıt sayfasını render et
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/signup.html'));
});
// Register route
router.post('/signup', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/signup.html'));
});

// Login route
router.post('/signin', async (req, res) => {
    // Kullanıcı giriş işlemleri
});

module.exports = router;
