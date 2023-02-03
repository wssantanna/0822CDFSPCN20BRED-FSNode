// Importei o Mock (simulador de dados) do banco de dados. 
const DBContexto = require('./database');

// Função responsável por obter multiplos itens. 
// Nota: Por padrão irá retornar os dez primeiros, porém é possível definir a quantidade desejada.
function obterItems(numeroDeItensPorPagina = 10) {

    const items = DBContexto.produtos.filter((_, indiceDoItem) => indiceDoItem < numeroDeItensPorPagina);

    return items;
}

// Função responsável por obter um item a partir do seu código de identificação. 
function obterUmItemPelaId(idItem) {

    const item = DBContexto.produtos.find(produto => produto.id == idItem);

    return item;
}

module.exports = { obterItems, obterUmItemPelaId };