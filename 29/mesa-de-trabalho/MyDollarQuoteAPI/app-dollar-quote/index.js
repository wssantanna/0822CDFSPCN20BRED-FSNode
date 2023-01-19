module.exports = function(
    valorDaCompraEmReais, 
    cotacaoDoDolarHoje = 5.11,
    valorMinimoDeCompraDeDolar = 100,
    valorMaximoDeCompraDeDolar = 2500) {
    
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