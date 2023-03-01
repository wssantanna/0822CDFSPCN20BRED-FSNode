const { validarChaveToken } = require('../services/jwt.service');

// Autorizar (Interceptador)
// Validar a autorizacao valida...
// Se nao for retorna um erro.
function autorizar(req, res, prox) {

    // Exemplo:
    // localhost:12345/produtos?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiV2lsbGlhbiIsInNldG9yIjoicHJvZmVzc29yIiwiaWF0IjoxNTE2MjM5MDIyfQ.ExLYokoWqbXGy1NNHbtZogGXPJzEjtOp81VusRbGwtU
    const { token } = req.query;
    // 
    try {
        validarChaveToken(token);
        prox();
    }
    catch {
        res.send('Token invalido');
    }
}

module.exports = { autorizar }