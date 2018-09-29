const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    pictureURL: {
        type: String,
        required: true
    },
})

const Location = mongoose.model('location', LocationSchema);

module.exports = Location;