const sessao = require('express-session')

function autorizar() {
    return sessao({
        // Palavra secreta para criar e posteriomente validar a sessão
        secret: 'digitalhouse'
    })
}

module.exports = {
    autorizar
}