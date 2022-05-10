const mongoose = require('mongoose');

const HotelsShema = new mongoose.Schema({
    name: {
        type: String
    },
    add: {
        type: String
    },
    img: {
        type: String
    },
    stars: {
        type: String
    }
})

module.exports = mongoose.model('Hotels', HotelsShema);