// Importei o express.
const express = require('express');
// Importei o recurso converterReaisEmDolares.
const converterReaisEmDolares = require('./app-dollar-quote');
// Criei uma instância do express.
const api = express();

// Exemplo:
// http://localhost:19123/dollar?valorEmReal=1000
api.get('/dollar?', (req, res) => {
    // Capturei os valores da variável "valorEmReais".
    const { valorEmReal } = req.query;
    // Incovei o método converterReaisEmDolares e passei o valorEmReal.
    // Armazenei o resultado na variável resultadoDaConversaoParaDolar.
    // Nota: Precisei utilizar o parseFloat() para converter em número, pois inicialmente consultas no http são string. 
    const resultadoDaConversaoParaDolar = converterReaisEmDolares(parseFloat(valorEmReal));
    // Retornei o resultado da conversão via http como o Express.
    res.send(resultadoDaConversaoParaDolar);
});

// Inicializei a instância do express na porta 19123 para acesso a os recursos da API.
api.listen('19123', () => console.log('API Dollar Quote está no ar!'));