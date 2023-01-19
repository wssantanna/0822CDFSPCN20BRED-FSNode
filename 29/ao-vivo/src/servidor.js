// 1. Importei a ferramenta Express...
const express = require('express');
// 2. Criei uma instância do Express para utilizar como Interface...
const servidor = express();


// 3. Definir os caminhos (rotas)(http) de acesso para os recursos 
// 3.1. Recursos do sistema que desejo disponibilizar
const somar = require('./sistema/somar');
const subtrair = require('./sistema/substrair');
const professores = require('./sistema/professores');

// 3.2. Como receber informações (requisição) com o método get?

// somar
// parametros (rotas);
servidor.get('/somar/:valor1/:valor2', (pedido, resposta) => {

    const { valor1, valor2 } = pedido.params;
 
    let resultado = somar(valor1, valor2);
    resposta.send('Resultado da soma: ' + resultado);
});

// substrair
// variaveis (consultas) 
servidor.get('/subtrair?', (pedido, resposta) => {
    const { valor1, valor2 } = pedido.query;
 
    let resultado = subtrair(valor1, valor2);
    resposta.send('Resultado da subtrair: ' + resultado);
});

// Outros exemplos
// consultar todos professores
servidor.get('/professores', (pedido, resposta) => {
    resposta.send(professores);
}); 

// consultar profesores filtrados pelo nome
servidor.get('/professores?', (pedido, resposta) => {
    
    const { nome } = pedido.query;

    let professoresFiltrados = professores.filter(professor => professor.nome.toLocaleLowerCase() === nome.toLocaleLowerCase());

    resposta.send(professoresFiltrados);
});


// Definir uma porta de acesso a os recursos da Interface
// Obs.: Para facilitar a compreensão, criei uma função que será executada assim que inicializamos a aplicação na porta 12345.
function iniciarServidor() {
    console.log('Servidor funcionando...');
}

servidor.listen('12345', iniciarServidor);