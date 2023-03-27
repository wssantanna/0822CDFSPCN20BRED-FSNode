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

// DDL - Linguagem de definição do banco de dados

const Usuario = database.define('usuarios', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING
})

const Credencial = database.define('credenciais', {
    nomeUsuario: DataTypes.STRING,
    senha: DataTypes.STRING
})

const Catalogo = database.define('catalogos', {
    nome: DataTypes.STRING
})

const Filmes = database.define('filmes', {
    nome: DataTypes.STRING,

})

const Atores = database.define('atores', {
    nome: DataTypes.STRING
})

// 1:1
Credencial.hasOne(Usuario)
Usuario.belongsTo(Credencial)

// 1:N
Usuario.hasMany(Catalogo)
Catalogo.belongsTo(Usuario)

// N:N
Filmes.belongsToMany(Atores, { through: 'elencos' })
Atores.belongsToMany(Filmes, { through: 'elencos' })

// Cadastrar
Credencial.create({
    nomeUsuario: 'wssantanna',
    senha: '12345'
}).then((credencial) => {
    Usuario.create({
        name: 'Willian',
        sobrenome: 'Sant Anna',
        credencialId: credencial.id 
    })
})

// Atualizar
Usuario.update({
    nome: 'Willian Simão'
},{
    where: {
        id: 1
    }
})

// Deletar
Usuario.destroy({
    where: {
        id: 1
    }
})

try {
    // Tenta autenticar...
    database.authenticate();
    // Se autenticação acontecer, sincroniza com banco...
    database.sync();
}
catch(error) {
    // Caso aconteça algum erro, retorna o erro para usuário...
    console.error(error);
}