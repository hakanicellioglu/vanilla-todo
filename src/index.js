// * Include necessary modules.
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { type } = require('os');
require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGODB_URI);



// Application configuration.
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;

// Setting the public folder as the root directory for 'static' files.
app.use(express.static(path.join(__dirname, '../public')));


// * Serving the index.html file in the root directory in the "/" route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// * '/signup' route definition
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'signup.html'));
});


// * Start the server
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});


// MongoDB bağlantısı
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB'ye bağlandı"))
    .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Kullanıcı Şeması
const userSchema = new mongoose.Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// GET /users endpoint'i
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Kullanıcıları alırken bir hata oluştu." });
    }
});

// Kayıt olma (Signup) rotası
app.post('/signup', async (req, res) => {
    try {
        const { firstname, surname, username, email, password } = req.body;

        // Kullanıcı var mı kontrolü
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Bu e-posta adresi zaten kayıtlı.' });
        }

        // Şifreyi hashleme
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yeni kullanıcı oluşturma
        const newUser = new User({
            firstname,
            surname,
            username,
            email,
            password: hashedPassword
        });

        // Veritabanına kaydetme
        await newUser.save();

        res.status(201).json({ message: 'Kayıt başarılı!' });
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu.' });
    }
});