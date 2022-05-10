const mongoose = require('mongoose');

const FilesShema = new mongoose.Schema({
    name: {
        type: String
    },
    file: {

    }
})

module.exports = mongoose.model('Files', FilesShema);