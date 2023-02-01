// Importei o express.
const express = require('express');
// Importei do módulo "path" responsável por gerir os caminhos do servidor (relativo/absoluta).
const path = require('path');
// Importei o módulo controller responsável pelos produtos.
const produtosController = require('./controllers/produtos.controller');

// Criei uma instancia do express.
const api = express();

// Exemplo de caminho absoluto.
// C:\Users\wssantanna\Desktop\0822CDFSPCN20BRED-FSNode\31\ao-vivo\src\
const CAMINHO_ABSOLUTO = __dirname;
// Exemplo
// C:\Users\wssantanna\Desktop\0822CDFSPCN20BRED-FSNode\32\ao-vivo\src + \views
api.set('views', path.join(CAMINHO_ABSOLUTO, "views"));
// Defini o ejs como o motor de interpretação/renderização das telas (views)
api.set('view engine', 'ejs');

// Master - Lista de itens.
api.get('/produtos', produtosController.requererTodosProdutos);
// Details - Informações do item.
api.get('/produto/:id', produtosController.requererUmProdutoApartirId);

// Disponibilizando os recursos da API na porta 1234.
api.listen('1234', () => console.log('Servidor está no ar!'));