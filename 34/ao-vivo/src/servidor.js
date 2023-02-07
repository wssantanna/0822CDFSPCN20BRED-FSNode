const express = require('express');
const path = require('path');

const api = express();

api.set('views', path.join(__dirname, 'views'));
api.set('view engine', 'ejs');

const equipamentosController = require('./controllers/equipamentos.controller');
const professoresController = require('./controllers/professores.controller');

// requererEquipamentos
api.get('/dados/equipamentos', equipamentosController.requererEquipamentos);

// requererEquipamentoPorId
api.get('/dados/equipamentos/:id', equipamentosController.requererEquipamentoPorId); 

api.get('/equipamentos', equipamentosController.requererTelaDeEquipamentos);

api.get('/equipamentos/:id', equipamentosController.requererTelaDeEquipamentoPorId);

// requererProfessores
api.get('/dados/professores', professoresController.requererProfessores);

// requererProfessorPorId
api.get('/dados/professores/:id', professoresController.requererProfessorPorId);



api.listen('1234', () => console.log('Servidor está no ar'));