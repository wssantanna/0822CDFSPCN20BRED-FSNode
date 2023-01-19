const express = require('express');

const api = express();

const homeController = require('./controllers/home.controller');
const somarController = require('./controllers/somar.controller');

api.get('/', homeController);
api.get('/somar', somarController);

api.listen('1234', () => console.log('Servidor Okay'));