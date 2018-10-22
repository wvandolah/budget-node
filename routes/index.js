const express = require('express');
const authRoutes = require('./authRoutes');
const catRoutes = require('./catRoutes')
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/cat', catRoutes)

module.exports = router;