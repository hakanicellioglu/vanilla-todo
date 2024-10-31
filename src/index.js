// * Include necessary modules.
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


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