const TokenService = require('../services/token.service')

function autorizar(req, res, proximo) {
    const { token } = req.query

    const tokenValido = TokenService.validarToken(token)

    if(tokenValido == true) {
        proximo()
    }
    else {
        res.status(401).json({ mensagem: 'Voce nao tem autorizacao' })
    }
} 

module.exports = { autorizar }