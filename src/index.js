require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // JSON formatındaki verileri almak için gerekli
app.use(express.urlencoded({ extended: true })); // URL-encoded verileri almak için gerekli

// Veritabanı Bağlantısı
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(__dirname + '/../public')); // Statik dosya dizinini ayarlayın

// Rotalar
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// Sunucu Başlatma
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
