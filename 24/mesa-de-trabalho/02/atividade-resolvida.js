// Cotação do dólar no dia 3 de maio de 2022.

function converterRealParaDolar(valorDaCompraEmReais, cotacaoDoDolarHoje = 4.97) {
    
    // Valor minimo e maximo de compra.
    let valorMinimoDeCompraDeDolar = 100;
    let valorMaximoDeCompraDeDolar = 2500;

    // Calculei a conversao do valor de compra para dolares.
    let valorDaCompraEmDolares = valorDaCompraEmReais / cotacaoDoDolarHoje;

    // Armazenei o resultado da validacao das recomendacoes de valor maximo e minimo.
    let naoTemValorMinimmoParaComprar = valorDaCompraEmDolares < valorMinimoDeCompraDeDolar;
    let ultrapassouValorMaximoParaComprar = valorDaCompraEmDolares > valorMaximoDeCompraDeDolar;

    // Criei uma variavel para armazenar as mensagem que sera enviada para usuario com resultado da cotacao.
    let mensagemComResultadoDoPedidoDeCotacao;

    // De acordo com os testes defino qual mensagem o sistema deve retornar para o usuario.
    if(naoTemValorMinimmoParaComprar) {
        mensagemComResultadoDoPedidoDeCotacao = `A compra mínima permitida é de ${valorMinimoDeCompraDeDolar.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}.`;
    } 
    else if(ultrapassouValorMaximoParaComprar) {
        mensagemComResultadoDoPedidoDeCotacao = `A compra máxima permitida é de ${valorMaximoDeCompraDeDolar.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}.`;
    }
    else {
        mensagemComResultadoDoPedidoDeCotacao = `Você pode comprar ${valorDaCompraEmDolares.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}.`
    }

    // Retorno mensagem com resultado da cotacao ou motivo da recusa.
    return mensagemComResultadoDoPedidoDeCotacao;
}

// Utilize as mensagens a seguir como base do retorno esperado:
// A compra mínima permitida é de US$ XXX,XX.
// A compra máxima permitida é de US$ XXXX,XX.
// Você pode comprar US$ XXX,XX.
console.log(converterRealParaDolar(100));
console.log(converterRealParaDolar(100000));
console.log(converterRealParaDolar(10000));