const express = require('express')
const router = express.Router();

const disController = require('../controller/disController');

/**
 * App Routers
 */

router.get('/', disController.homepage);
//router.get('/news', disController.newsPage)

module.exports = router;