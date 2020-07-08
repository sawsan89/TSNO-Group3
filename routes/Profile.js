const express = require('express');
const router = express.Router();
const User = require('../models/User');
var cors = require('cors')
router.use(cors());
require('dotenv').config(); // to read .env file

router.post('/profile', (req, res) => {
    var UserUpdate = new User.User;
    UserUpdate.service = req.body.service;
    console.log("Body:", req.body);
    res.json({ msg: "New Servie Added" })
})

module.exports = router