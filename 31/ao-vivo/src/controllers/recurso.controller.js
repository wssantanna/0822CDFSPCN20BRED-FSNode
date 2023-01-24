const recursoDeConsulta = (req, res) => {
    // Capturei e armazenei os valores das variáveis de consulta.
    const nome = req.query.nome;
    // Respondi o resultado da concatenação dos valores.
    res.send(`Bem vindo ${nome}. Esse é seu recurso`);
}

const recursoDeParametro = (req, res) => {
    // Capturei e armazenei os valores dos parametros da rota.
    const nome = req.params.nome;
    // Respondi o resultado da concatenação dos valores.
    res.send(`Bem vindo ${nome}. Esse é seu recurso`);
}

// Exportação dos recursos.
module.exports = { recursoDeConsulta, recursoDeParametro }