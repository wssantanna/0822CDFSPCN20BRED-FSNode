var jwt = require('jsonwebtoken');

const PALAVRA_SECRETA = 'shhhhh';

// Gerar uma chave
function gerarChaveToken(usuario) {


    let chaveToken = jwt.sign(usuario, PALAVRA_SECRETA);

    // Exemplo:
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiV2lsbGlhbiIsInNldG9yIjoicHJvZmVzc29yIiwiaWF0IjoxNTE2MjM5MDIyfQ.ExLYokoWqbXGy1NNHbtZogGXPJzEjtOp81VusRbGwtU
    return chaveToken;
}

// Validar uma chave

function validarChaveToken(chaveToken) {

    return jwt.verify(chaveToken, PALAVRA_SECRETA);
}

module.exports = { gerarChaveToken, validarChaveToken }