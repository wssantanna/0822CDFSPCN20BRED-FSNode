const express = require('express');

const path = require('path');

const indexRouter = require('./routes/index')

const api = express();

api.use(express.static(path.join(__dirname, 'public')));

api.set('views', path.join(__dirname, 'views'))

api.set('view engine', 'ejs');

api.use('/', indexRouter);

api.listen('12345', () => { console.log('servidor ok.') });

module.exports = api;