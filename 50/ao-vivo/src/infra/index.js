
const { Sequelize, DataTypes } = require('sequelize')

const database = new Sequelize(
    'lojadh',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

// DDL - Definição das nossas tabelas
const Produtos = database.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    preco: DataTypes.DOUBLE,
})

const Usuario = database.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

const Credencial = database.define('credencial', {
    nomeUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

/*
    Usuário tem:

    idUsuario
    Nome, 
    Sobrenome
    idCredencial

    1) Muitas credenciais
    X 2) Uma credencial

*/

/*
    Credencial tem:

    idCredencial
    Usuario,
    Senha

    1) Muitos usuarios
    x 2) Um usuário

*/

// 1:1
Credencial.hasOne(Usuario)
Usuario.belongsTo(Credencial)

try {
    database.authenticate()
    database.sync()
}
catch(error) {
    console.error(error)
}

module.exports = {
    Produtos,
    Credencial,
    Usuario
}