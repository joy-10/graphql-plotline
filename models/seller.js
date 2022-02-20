const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sellerSchema = new Schema({
    name: String,
    sellerId: String
})

module.exports = mongoose.model('Seller',sellerSchema)