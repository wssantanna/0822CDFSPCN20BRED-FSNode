const { DataTypes } = require('sequelize')

const database = require('../database/DbBlog')

// definimos a tabela...
database.define('artigos', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING
})