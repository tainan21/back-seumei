const { STRING } = require('mysql/lib/protocol/constants/types')


const mongoose = require('../config/index').mongoose

const imageSchama = new mongoose.Schema({
    imageBase64: {
        type: String
    },
           
    createAt: {
        type: Date,
        default: Date.now,
    }
})
const imageModel = mongoose.model('image', imageSchama)
module.exports = imageModel