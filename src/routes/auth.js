const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const path = require('path');
const app = express();


app.use(express.json()); // JSON gövdesini almak için
app.use(express.urlencoded({ extended: true }));

// GET /signup - Kayıt sayfasını render et
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/signup.html'));
});

router.post('/signup', async (req, res) => {
    console.log(req.body);  // Gelen veriyi terminalde görüntüleyin
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required.' });
        }

        // Devam eden işlemler
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while registering the user.' });
    }
});




// Login route - POST /signin
router.post('/signin', async (req, res) => {
    // Kullanıcı giriş işlemleri burada yapılabilir
});

module.exports = router;
