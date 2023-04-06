require('dotenv').config()


const { Sequelize, DataTypes } = require('sequelize')

const database = new Sequelize(
    // Nome do banco de dados
    process.env.DB_NOME, 
    // Usuário
    process.env.DB_USUARIO, 
    // Senha
    process.env.DB_SENHA,
    // Tecnologia / Aonde está o localizado
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

// DDL

const ProdutosEntity = database.define('produtos', {
    nome: DataTypes.STRING
})

try {
    database.authenticate()
    database.sync()
}
catch(error) {
    console.error(error)
}

module.exports = { ProdutosEntity }