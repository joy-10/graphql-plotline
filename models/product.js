const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    productId: String,
    price: Number,
    sellerId: String
})

module.exports = mongoose.model('Product',productSchema)