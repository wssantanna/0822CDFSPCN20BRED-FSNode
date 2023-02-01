// Simulação dos dados do banco de dados.
// Nota: Em uma aplicação real teremos acesso ao banco de dados a partir de um link de conexão.
const contexto = {
        produtos: [
            {
                id: 1,
                nome: "morango",
                quantidade: 1
            },
            {
                id: 2,
                nome: "banana",
                quantidade: 5
            },
            {
                id: 3,
                nome: "melão",
                quantidade: 10
            },
        ]
};

// Função responsável por consulta e retorna uma lista paginada de itens.
// Nota: defini a possibilidade de definir o número de itens que desejo obter.
function obterItens(numeroDeItens = 10) {

    const { produtos } = contexto;

    const items = produtos.filter((_, indice) => indice == numeroDeItens);

    return items;
}

// Função responsável por consulta e retorna um item apartir do valor de Id.
function obterUmItemPorId(id) {

    const { produtos } = contexto;

    const item = produtos.find(produto => produto.id == id);

    return item;
}

// Exporto dos recursos da model obterItens, obterUmItemPorId
module.exports = { obterItens, obterUmItemPorId };