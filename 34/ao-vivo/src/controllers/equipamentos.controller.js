const equipamentosModel = require('../models/equipamentos.model');

function requererEquipamentos(req, res) {
    
    // obtendo equipamentos do banco de dados (mock|simulado).
    const equipamentos = equipamentosModel.obterEquipamentos();

    res.send(equipamentos);
}

function requererEquipamentoPorId(req, res) {

    const { id } = req.params;

    // obtendo um equipamento do banco de dados (mock|simulado) a partir de uma coparação do código de indentificação.
    const equipamento = equipamentosModel.obterEquipamentoPorId(id);

    res.send(equipamento);
}

function requererTelaDeEquipamentos(req, res) {

    const equipamentos = equipamentosModel.obterEquipamentos();

    res.render('equipamentos', {
        equipamentos
    });
}

function requererTelaDeEquipamentoPorId(req, res) {

    const { id } = req.params;

    const equipamento = equipamentosModel.obterEquipamentoPorId(id);

    res.render('equipamento', {
        equipamento
    });
}

module.exports = { 
    requererEquipamentos, 
    requererEquipamentoPorId,
    requererTelaDeEquipamentos,
    requererTelaDeEquipamentoPorId
}