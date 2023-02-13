
const express = require('express');

const controller = require('./__controller__');

const api = express();

api.get('/funcionarios', controller.requererFuncionarios);
api.get('/functionarios?', controller.requererFuncionarioPorCargo);
api.get('/functionarios/:id', controller.requererFuncionarioPorId);

api.get('/items', controller.requererItems);
api.get('/items/:id', controller.requererFuncionarioPorId);


api.listen('1234', () => console.log('Servidor está no ar!'));