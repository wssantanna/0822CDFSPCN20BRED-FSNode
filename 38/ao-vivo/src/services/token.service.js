require('dotenv').config()
const jwt = require('jsonwebtoken')

const PALAVRA_SECRETA = process.env.PALAVRA_SECRETA

function validarToken(token) {
    try {
        
        jwt.verify(token, PALAVRA_SECRETA)

        return true
    }
    catch {
        return false
    }
}

function criarToken(usuario) {
    
    const token = jwt.sign(usuario, PALAVRA_SECRETA)

    return token
}

module.exports = { validarToken, criarToken }