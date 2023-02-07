
const Db = require('./__mock-database__');

function obterProfessores() {
    const professores = Db.professores.filter((_, indiceDoProfessor) => {
        const numeroDeProfessoresPorPagina = 10;
        
        return indiceDoProfessor < numeroDeProfessoresPorPagina;
    });

    return professores;
}

function obterProfessorPorId(id) {
    const professor = Db.professores.find(professor => professor.id == id)

    return professor;
}

module.exports = { obterProfessores, obterProfessorPorId }