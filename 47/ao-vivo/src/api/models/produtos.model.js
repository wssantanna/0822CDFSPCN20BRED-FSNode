const { ProdutosEntity } = require('../../infra')

async function consultarTodos() {
    try {
        const produtos = await ProdutosEntity.findAll()
        
        return produtos
    }
    catch(error) {
        return error
    }

}

async function consultarUmPorId(id) {
    try {
        const produtoEncontrado = await ProdutosEntity.findByPk(id)

        return produtoEncontrado
    }
    catch(error) {
        return error
    }
}

async function deletarProdutoPorId(id) {
    try {
        await ProdutosEntity.destroy({
            where: {
                id
            }
        })

        return { mensagem: "produto deletado!" }
    }
    catch(error) {
        return error
    }
}

async function atualizarProdutoPorId(id, produtoAtualizado) {
    try {
        await ProdutosEntity.update(
            produtoAtualizado,
            {
                where: {
                    id
                }
            }
        )

        return { mensagem: "produto deletado!" }
    }
    catch(error) {
        return error
    }
}

async function criar(produto) {
    try {
        const novoProduto = await ProdutosEntity.create(produto)
    
        return novoProduto
    }
    catch(error) {
        return error
    }
}

module.exports = {
    consultarTodos,
    consultarUmPorId,
    criar,
    deletarProdutoPorId,
    atualizarProdutoPorId
}