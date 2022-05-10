const mongoose = require('mongoose');

const HotimgShema = new mongoose.Schema({
    name: {
        type: String
    },

})

module.exports = mongoose.model('Hotimg', HotimgShema);