const sessao = require('express-session')

function autorizar() {
    return sessao({
        secret: 'digitalhouse',
        // controla se a sessão deve ser salva novamente no armazenamento
        resave: false,
        // controla se uma nova sessão deve ser criada automaticamente quando a solicitação não contém uma sessão válida.
        saveUnitialized: true
    })
}

function autenticar(req, res) {
    const credential = req.body

    if(credential) {
        req.session.loggedIn = true
        req.session.username = username

        res.redirect('/produtos')
    }
    else {
        res.redirect('/autenticar')
    }
}

function desconectar(req, res) {
    try {
        req.session.destroy()
        res.redirect('/autenticar')
    }
    catch(error) {
        res.send(error)
    }
}

module.exports = { 
    autorizar,
    autenticar,
    desconectar
}