const database = require('./__mockdatabase__')

function obterItens() {
    const produtos = database.produtos

    return produtos
}

/*
    - obter items a partir de algum criterio
*/

module.exports = { obterItens }