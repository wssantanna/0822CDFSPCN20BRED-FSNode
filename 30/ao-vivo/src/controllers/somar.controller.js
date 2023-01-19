
const SomarController = (req, res) => {

    const { valor1, valor2 } = req.query;

    // Se os valores forem definidos...
    if(valor1 && valor2) {
        // Somo os valores e armazeno na variável resultado.
        const resultado = parseInt(valor1) + parseInt(valor2);
        // Respondo o valor do resultado.
        res.send(resultado);
    }
    else {
        res.send('Error: É obrigatório adicionar valor1 e valor2 em sua requisição. Ex.: /somar?valor1=2&valor2=2');
    }
}

module.exports = SomarController;