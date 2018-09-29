var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PriceUpdateSchema = new Schema({
    timestamp: Date,
    price: {
        type: Number,
        required: true
    }
})

const PriceUpdate = mongoose.model('priceUpdate', PriceUpdateSchema);

module.exports = PriceUpdate;