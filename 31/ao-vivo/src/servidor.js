// Importei do express.
const express = require('express');
// Importei do módulo "path" responsável por gerir os caminhos do servidor (relativo/absoluta).
const path = require('path');
// Importei os controladores "recursoDeConsulta" e "recursoDeParametro"
const { recursoDeConsulta, recursoDeParametro } = require('./controllers/recurso.controller');
// Crie uma estáncia
const api = express();

// Exemplo de caminho absoluto.
// C:\Users\wssantanna\Desktop\0822CDFSPCN20BRED-FSNode\31\ao-vivo\src\
const caminhoAbsoluto = __dirname;

// Exemplo
// C:\Users\wssantanna\Desktop\0822CDFSPCN20BRED-FSNode\31\ao-vivo\src\views
api.set("views", path.join(caminhoAbsoluto, "views"));
api.set("view engine", "ejs");

// Exemplo de acesso ao recurso via HTTP:
// http://localhost:1234/recurso?nome=willian
api.get('/recurso/?', recursoDeConsulta);

// Exemplo de acesso ao recurso via HTTP:
// http://localhost:1234/recurso/willian
api.get('/recurso/:nome', recursoDeParametro);

// Recursos de apresentação de tela.
api.get('/tela', (req, res) => {
    // C:\Users\wssantanna\Desktop\0822CDFSPCN20BRED-FSNode\31\ao-vivo\src\views\home.html
    res.sendFile(path.join(caminhoAbsoluto, 'views/home.html'));
});

// Recursos de apresentação de tela.
api.get('/tela/colaboradores', (req, res) => {
    res.render('colaboradores');
});

// Disponibilizando os recursos da API na porta 1234.
api.listen('1234', () => console.log('Servidor okay!'));