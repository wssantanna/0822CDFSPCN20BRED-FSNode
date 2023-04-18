const usuariosModel = require('../models/usuario.model')
const sessaoMiddleware = require('../middleware/sessao.middleware')

function autenticar(req, res) {
    res.render('autenticar')
}

async function validarCredencial(req, res) {
    const { usuario, senha } = req.body

    const usuarioEncontrado = await usuariosModel.obterUmaCredencial({
        usuario,
        senha
    })

    if(usuarioEncontrado) {
        req.session.loggedIn = true
        req.session.username = username

        res.redirect('/produtos')
    } 
    else {
        res.send('Usuário ou senha inválidos')
    }
    
}

function registrar(req, res) {
    res.render('cadastrar')
}

function cadastrarUsuario(req, res) {
    const { nome, sobrenome, usuario, senha } = req.body

    const novoUsuario = {
        nome,
        sobrenome,
        credencial: {
            nomeUsuario: usuario,
            senha
        }
    }

    try {
        usuariosModel.criar(novoUsuario)
        res.redirect("/autenticar")
    }
    catch(error) {
        res.send(error)
    }

}

module.exports = { 
    autenticar,
    validarCredencial,
    registrar,
    cadastrarUsuario
}