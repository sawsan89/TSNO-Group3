const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.use(cors());
require('dotenv').config(); // to read .env file

router.post('/profile', (req, res) => {
    console.log("Body:",req.body);
    const serviceData = {
        service: req.body.service
    }
    res.json("New Servie Added")
})

module.exports = router