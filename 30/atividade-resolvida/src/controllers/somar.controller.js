// Armazenei o controller na variável somarController.
const somarController = (req, res) => {

    // Separo os valores das variáveis valor1 e valor2.
    let { valor1, valor2 } = req.query;

    // Converto os valores em texto (string) para número (number).
    valor1ConvertidoEmNumero = parseFloat(valor1);
    valor2ConvertidoEmNumero = parseFloat(valor2);

    // Somo os dois valores e armazeno os resultado na variável "resultadoDaSoma".
    const resultadoDaSoma = valor1ConvertidoEmNumero + valor2ConvertidoEmNumero;

    // Retorno o resultado via HTTP no express.
    res.send(`Resultado: ${resultadoDaSoma}`);

}

// Exportar somarController.
module.exports = somarController;