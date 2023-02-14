const database = require('./__mockdatabase__');

function obterUsuarioPorCredencial(credencialDoUsuario) {

    const usuarioEncontrado = database.usuarios.find(({ credencial }) => {

        const usuarioExiste = credencialDoUsuario.usuario == credencial.usuario;
        const senhaCorreta = credencialDoUsuario.senha == credencial.senha;
        const credencialValida = usuarioExiste && senhaCorreta;

        return credencialValida;
    }); 

    return usuarioEncontrado;
}

module.exports = { obterUsuarioPorCredencial }