const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// GET - get all locations data
router.get('/api/locations', function (req, res) {
    Location.find({})
        .then((locations) => {
            res.send({
                message: "GET request successful",
                data: locations
            })
        })
        .catch((err) => {
            res.send({
                error: err.message
            })
        })
})

module.exports = router;