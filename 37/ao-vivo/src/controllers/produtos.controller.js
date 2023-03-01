
// Recurso (Controlador)
// Fica responsavel por permitir ao acesso a o recurso.
function requererTodosProdutos(req, res) {
    res.send('Todos os produtos')
}

module.exports = { requererTodosProdutos }