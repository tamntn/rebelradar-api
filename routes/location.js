const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// GET - get all locations data
router.get('/api/locations', function (req, res) {
    Location.find({})
        .populate('priceUpdates')
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

// POST - push new ratings
router.post('/api/ratings/:locationId', function (req, res) {
    Location.findByIdAndUpdate({ _id: req.params.locationId }, { $push: { ratings: req.body.rating } })
        .then(() => {
            res.send({
                message: "New rating has been updated",
                data: req.body.rating
            })
        })
        .catch((err) => {
            res.send({
                error: err.message
            });
        })
})

module.exports = router;