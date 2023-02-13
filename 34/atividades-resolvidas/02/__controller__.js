
const { obterFuncionarios } = require('../01/model');

function requererFuncionarios(req, res) {
    
    const funcionarios = obterFuncionarios();

    res.send(funcionarios);
}

// -------

const { obterFuncionarioPorId } = require('../01/model');

function requererFuncionarioPorId(req, res) {

    const { id } = req.params;

    const funcionarioEncontrado = obterFuncionarioPorId(id);

    res.send(funcionarioEncontrado);
}

// -------

const { obterFuncionarioPorCargo } = require('../01/model');

function requererFuncionarioPorCargo(req, res) {

    const { cargo } = req.query;

    const funcionariosFiltradosPorCargo = obterFuncionarioPorCargo(cargo);

    res.send(funcionariosFiltradosPorCargo);
}

// -------

const { obterItems} = require('../01/model');

function requererItems(req, res) {
    
    const items = obterItems();

    res.send(items);

}

// -------

const { obterItemPorId } = require('../01/model');

function requererItemPorId(req, res) {

    const { id } = req.params;

    const itemEncontrado = obterItemPorId(id);

    res.send(itemEncontrado);
}

module.exports = { 
    requererFuncionarios, 
    requererFuncionarioPorId,
    requererFuncionarioPorCargo,
    requererItems,
    requererItemPorId
}