const mongoose = require('mongoose');
const fs = require('fs');
const databaseConfig = require('../../config/db');
const Location = require('../../models/Location');

// Mongoose connection setup
mongoose.Promise = global.Promise;
mongoose.connect(databaseConfig.devURI);

// Read Location data file
// Clear all current Location documents in the database
// Insert all new location data into the database
fs.readFile('../datasets/locations.json', function (err, data) {
    data = JSON.parse(data);
    Location.remove({})
        .then(() => Location.insertMany(data))
        .then((results) => {
            console.log("Imported location dataset.")
            mongoose.disconnect();
        })
        .catch((err) => console.log(err))
})