const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.b7may.mongodb.net/DtaDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function () {
    console.log('connected')
});

//Models
require('./Discover');
require('./Hotels');
require('./Files');
require('./event');
require('./Artisan');
require('./Words');

