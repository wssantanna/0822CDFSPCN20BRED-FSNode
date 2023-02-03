// Simulação dos dados do banco de dados.
// Nota: Em uma aplicação real teremos acesso ao banco de dados a partir de um link de conexão.
const contexto = {
    produtos: [
        {
            id: 1,
            nome: "morango",
            quantidade: 1,
            categoria: 'fruta'
        },
        {
            id: 2,
            nome: "banana",
            quantidade: 5,
            categoria: 'fruta'
        },
        {
            id: 3,
            nome: "melão",
            quantidade: 10,
            categoria: "fruta"
        },
    ],
    usuarios: [
        {
            id: 1,
            nome: "Lenix"
        },
        {
            id: 2,
            nome: "Willian"
        },
        {
            id: 3,
            nome: "Anwar"
        }
    ]
};

module.exports = contexto;