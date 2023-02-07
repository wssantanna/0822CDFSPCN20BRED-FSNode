const professoresModel = require('../models/professores.model');

function requererProfessores(req, res) {

    // obtendo equipamentos do banco de dados (mock|simulado).
    const professores = professoresModel.obterProfessores();

    res.send(professores);
}

function requererProfessorPorId(req, res) {
    
    const { id } = req.params;

    // obtendo um equipamento do banco de dados (mock|simulado) a partir de uma coparação do código de indentificação.
    const professor = professoresModel.obterProfessorPorId(id);

    res.send(professor);
}

module.exports = { requererProfessores, requererProfessorPorId }