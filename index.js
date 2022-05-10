const express = require('express');
const expressLayout = require('express-ejs-layouts');


const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayout);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/disRoutes');
app.use('/', routes);

app.get('/news', (req, res) => {
    res.render('news')
})

app.get('/books', (req, res) => {
    res.render('books')
})

app.get('/app', (req, res) => {
    res.render('app')
})

app.get('/shop', (req, res) => {
    res.render('shop')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));