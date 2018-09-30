const express = require('express');
const router = express.Router();
const moment = require('moment');
const Location = require('../models/Location');
const PriceUpdate = require('../models/PriceUpdate');

// POST - post to priceUpdates collection
// Then post the sensor data to the corresponding location
router.post('/api/price/:locationId', function (req, res) {
    const newPriceUpdate = new PriceUpdate({
        timestamp: moment().format(),
        price: req.body.price
    })

    newPriceUpdate.save()
        .then(priceUpdate => {
            Location.findByIdAndUpdate({ _id: req.params.locationId }, { $push: { priceUpdates: priceUpdate } })
                .then(() => {
                    // Emit Event To The Server
                    req.app.io.emit("newPriceUpdate");
                    res.send({
                        message: "New price update has been added",
                        data: priceUpdate
                    })
                })
                .catch((err) => {
                    res.send({
                        error: err.message
                    });
                })
        })
        .catch((err) => {
            res.send({
                error: err.message
            });
        })
})

module.exports = router;