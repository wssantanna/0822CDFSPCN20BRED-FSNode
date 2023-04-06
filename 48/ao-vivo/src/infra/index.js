require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize')

const database = new Sequelize(
    process.env.DB_NOME,
    process.env.DB_USUARIO,
    process.env.DB_SENHA,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

const Produtos = database.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: DataTypes.DOUBLE
})

try {
    database.authenticate()
    database.sync()
}
catch(error) {
    console.error(error)
}

module.exports = {
    Produtos
}