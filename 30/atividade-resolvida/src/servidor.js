// Importei o express.
const express = require('express');
// Criei uma instância (copia) do express.
const api = express();

// Importei o controller somarController.
const somarController = require('./controllers/somar.controller');

// Criei uma rota para receber os valores via parametros.
api.get('/somar?', somarController);

// Inicializo o servidor na porta 12345.
api.listen('12345', () => console.log('Servidor Okay!'));