const { gerarChaveToken } = require('../services/jwt.service');

// Autenticar (Gerar um Token)
// Validar se o usuario e senha sao validos...
// Se for valido entrego uma 'autorizacao'.
function autenticar(req, res) {

    const { usuario, senha } = req.body;

    // Comparo se o usuario esta cadastrado
    if(usuario === 'wssantanna' && senha === '1234') {
        
        const chaveToken = gerarChaveToken({ usuario });
        
        res.send(chaveToken);
    }
    else {
        res.send('Usuario ou senha nao estao cadastrados!')
    }
}

module.exports = { autenticar }