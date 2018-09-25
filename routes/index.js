const express = require('express');
const authRoutes = require('./authRoutes.js');
const router = express.Router();

router.use('/auth', authRoutes);

module.exports = router;