require('dotenv').config()

const { Sequelize } = require('sequelize')

const DbBlog = new Sequelize(
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

module.exports = DbBlog