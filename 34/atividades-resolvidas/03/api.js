
const express = require('express');
const path = require('path');

const itemController = require('./controllers/item.controller');

const api = express();

api.set('views', path.join(__dirname, 'views'));
api.set('view engine', 'ejs');

api.get('/items', itemController.requererItems);

api.listen('1234', () => console.log('Servidor está no ar!'));