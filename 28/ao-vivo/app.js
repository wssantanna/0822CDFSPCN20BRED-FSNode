const express = require('express');

const api = express();

/*
    Receber requisições (pedidos)
    .params
    .body
    .query

    Resposta as requisições
    .json()
    .send()
    .sendStatus()
    .sendFile()
    .download()
    .redirect()
    .render()
                                                   req   , res
*/
api.get('/cumprimentar/:nome/:sobrenome', function(pedido, resposta) {
    resposta.send('Olá' + ' ' + pedido.params.nome + ' ' + pedido.params.sobrenome);
});

api.get('/cumprimentar', function(pedido, resposta) {
    resposta.send('Olá');
});


// Em qual porta sua API vai disponibilizar os recursos?
api.listen(12345, function() {
    console.log('Está funcionando!');
});