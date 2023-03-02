const UsuarioModel = require('../models/usuario.model')
const TokenService = require('../services/token.service')

function cadastrar(req, res) {

    const { nome, sobrenome, usuario, senha } = req.body

    const cadastrado = UsuarioModel.criarUsuario({ nome, sobrenome, usuario, senha })

    if(cadastrado) {
        res.status(201).json({ mensagem: 'Usuario cadastrado com sucesso!' })
    }
    else {
        res.status(400).json({ mensagem: 'Nao foi possivel cadastrar o usuario!' })
    }
}

function autenticar(req, res) {

    const { usuario, senha } = req.body

    const token = TokenService.criarToken(usuario)

    const idUsuario = UsuarioModel.obterPorCredencial({ usuario, senha })

    if(idUsuario == null) {
        
        res.status(401).json({ mensagem: 'Usuario e/ou senha incorretos!' })
    }
    else {

        res.status(200).json(token)
    }


}

module.exports = { cadastrar, autenticar }