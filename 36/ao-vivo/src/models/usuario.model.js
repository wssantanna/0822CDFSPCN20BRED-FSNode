const database = require('./__mockdatabase__');

function obterUsuarioPorCredencial(credencial) {

    const usuarioEncontrado = database.usuarios.find(usuarioAtual => {
        /*
            Condicionais de comparação:
                - O usuário existe?
                - A senha existe?
                - Usuário e senha são as mesmas?
        */
        const usuarioExiste = credencial.usuario == usuarioAtual.credencial.usuario;
        const senhaCorreta = credencial.senha == usuarioAtual.credencial.senha;
        const usuarioComCredencialValida = usuarioExiste && senhaCorreta;

        // Caso o usuário e a senha sejam a mesma, retornamos o objeto responsável pelo usuário.
        return usuarioComCredencialValida;
    }); 

    // Retorna o usuário encontrado ou nulo caso não encontre.
    return usuarioEncontrado;
}

module.exports = { obterUsuarioPorCredencial }