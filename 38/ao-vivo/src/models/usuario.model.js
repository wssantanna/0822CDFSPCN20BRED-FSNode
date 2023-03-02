const database = require('./__mockdatabase__');

function obterPorCredencial(credencial) {

    const usuarios = database.usuarios

    const usuarioEncontrado = usuarios.find(dbUsuario => dbUsuario.credencial.usuario == credencial.usuario && dbUsuario.credencial.senha == credencial.senha)

    return usuarioEncontrado
}

function criarUsuario(fichaDoUsuario) {

    return true; // boolean true / false
}

module.exports = { obterPorCredencial, criarUsuario }