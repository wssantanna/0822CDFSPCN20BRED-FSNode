
function autenticar(req, res) {
    res.render('autenticar')
}

function validarAutenticacao(req, res) {
    const { usuario, senha } = req.body

    if(usuario == "wssantanna" && senha == "12345")
        res.redirect("/produtos?token=dh")
    else 
        res.redirect("/autenticar")
}

function registrar(req, res) {
    res.render('cadastrar')
}

function cadastrarUsuario(req, res) {
    //const { nome, sobrenome, usuario, senha } = req.body

    console.log("novo usuário:", req.body)

    res.redirect("/autenticar")
}

module.exports = { 
    autenticar,
    validarAutenticacao,
    registrar,
    cadastrarUsuario
}