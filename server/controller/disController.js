require('../models/database');


const Discover = require('../models/Discover');
const Hotels = require('../models/Hotels');
const Files = require('../models/Files');
const Events = require('../models/event');
const Artisan = require('../models/Artisan');
const Words = require('../models/Words');
const hotimg = require('../models/HotImage');
/**
 * GET / 
 * Homepage
 */
exports.homepage = async (req, res) => {
    try {
        const discover = await Discover.find({});

        const hotels = await Hotels.find({}).sort({ _id: -1 })
        const hotel = { hotels }

        const filesData = await Files.find({});
        const files = { filesData }

        const eventsData = await Events.find({});
        const events = { eventsData }

        const artisanData = await Artisan.find({});
        const artisan = { artisanData }

        const wordsData = await Words.find({});
        const words = { wordsData }

        const hotimgData = await hotimg.find({});
        const hotimgs = { hotimgData }

        res.render('index', { discover, hotel, files, events, artisan, words, hotimgs });

    } catch (error) {
        console.log(error)
    }
}

exports.newsPage = async (req, res) => {
    try {
        res.render('news');
    }
    catch (error) {
        console.log(error)
    }
}



