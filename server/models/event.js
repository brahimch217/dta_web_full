const mongoose = require('mongoose');

const EventShema = new mongoose.Schema({
    name: {
        type: String
    },
    place: {
        type: String
    },
    date: {
        type: String
    },
    img: {
        type: String
    }

})

module.exports = mongoose.model('Events', EventShema);