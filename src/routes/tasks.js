const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Add a new task
router.post('/add', async (req, res) => {
    // Görev ekleme işlemleri
});

// View tasks
router.get('/view', async (req, res) => {
    // Görevleri listeleme işlemleri
});

module.exports = router;
