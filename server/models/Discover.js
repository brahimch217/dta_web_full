const mongoose = require('mongoose');

const DiscoverShema = new mongoose.Schema({
    name: {
        type: String
    },
    tours: {
        type: String
    },
    img: {
        type: String
    }
})

module.exports = mongoose.model('Discover', DiscoverShema);