// Importei o express.
const express = require('express');
// Criei uma instância (copia) do express.
const api = express();

const path = require('path');

//Juntar
api.set("views", path.join(__dirname, "views"));

// PEGAR -> Rota, e configurando esta rota.
//Requisição -> SOLICITAR 
// Resposta -> Utilizado para obter uma resposta.
api.get('/', (req,res) => {
res.sendFile(path.join(__dirname, 'views/index.html'))
})



//configuracao de qual porta utilizaremos.
api.listen('12345', () => console.log('Servidor Okay!'));