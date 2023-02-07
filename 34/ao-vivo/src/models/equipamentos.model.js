const Db = require('./__mock-database__');

function obterEquipamentos() {
    
    const equipamentos = Db.equipamentos.filter((_, indiceDoEquipamento) => {
        const numeroDeEquipamentosPorPagina = 10;
        
        return indiceDoEquipamento < numeroDeEquipamentosPorPagina;
    });

    return equipamentos;
}

function obterEquipamentoPorId(id) {

    const equipamento = Db.equipamentos.find(equipamento => equipamento.id == id);

    return equipamento;
}

module.exports = { obterEquipamentos, obterEquipamentoPorId }