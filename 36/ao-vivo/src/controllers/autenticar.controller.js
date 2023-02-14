const { obterUsuarioPorCredencial } = require('../models/usuario.model');

function requererAutorizacao(requisicao, resposta) {

    /*
        const usuario = requisicao.body.usuario;
        const senha = requisicao.body.senha;
    */
    const { usuario, senha } = requisicao.body;

    const credencial = { usuario, senha };

    const usuarioValido = obterUsuarioPorCredencial(credencial);

    if(usuarioValido) {
        resposta.send('chave-de-autorização (token)');
    }
    else {
        resposta.send('Usuário ou senha inválido.');
    }
}

module.exports = { requererAutorizacao }