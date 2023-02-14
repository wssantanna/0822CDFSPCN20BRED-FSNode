
const express = require('express');

const api = express();

// Opção 1:
// Nesse primeiro caso preciso adicionar em todas as rotas a função antes do controlador responsável por retornar os recursos.
api.get(
    '/produtos', 
    (req, res, autorizar) => {
        
        const { chave } = req.query;

        const palavraChave = 'willian';

        if(chave == palavraChave) {
            autorizar();
        }
        else {
            res.send('Não tem permissão!');
        }
    },
    (req, res) => {

    const produtos = [
        {
            id: 1,
            nome: 'banana'
        },
        {
            id: 2,
            nome: 'morango'
        },
        {
            id: 3,
            nome: 'maçã'
        }
    ]

    res.send(produtos);
}); 

// Opção 2:
// Nesse primeiro caso o "middleware" é adicionado a todas as rotas filhas dessa rota automaticamente.
api.use('/produtos', (req, res, autorizar) => {
        
    const { chave } = req.query;

    const palavraChave = 'willian';

    if(chave == palavraChave) {
        autorizar();
    }
    else {
        res.send('Não tem permissão!');
    }
});

api.get(
    '/produtos', 
    (req, res) => {

    const produtos = [
        {
            id: 1,
            nome: 'banana'
        },
        {
            id: 2,
            nome: 'morango'
        },
        {
            id: 3,
            nome: 'maçã'
        }
    ]

    res.send(produtos);
}); 

// Exemplo de "middleware" de configuração.
api.use('/produtos', express.json());

api.listen('1234', () => console.log('Servidor está online!'));