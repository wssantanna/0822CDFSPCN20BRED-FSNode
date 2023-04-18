const { Credencial, Usuario } = require('../../infra')

function criar(usuario) {
    Credencial.create({
        nomeUsuario: usuario.credencial.nomeUsuario,
        senha: usuario.credencial.senha
    }).then((novaCredencial) => {
        Usuario.create({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            credencialId: novaCredencial.id
        })
    })
}

function atualizar() {

}

function deletar() {

}

async function obterUmaCredencial(credencial) {
    const usuarioProcurado = await Credencial.findOne({
        where: {
            nomeUsuario: credencial.usuario,
            senha: credencial.senha
        }
    })

    return usuarioProcurado
}

module.exports = {
    criar,
    deletar,
    atualizar,
    obterUmaCredencial
}