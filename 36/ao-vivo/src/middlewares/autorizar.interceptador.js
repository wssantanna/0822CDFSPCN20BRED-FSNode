
function autorizarPorToken(requisicao, resposta, autorizar) {

    // Chave retornada do usuário via http.
    // Nota: O formato da requisição: https://localhost:1234/produtos?chave=digitalhouse.
    const { chave } = requisicao.query;
    // Chave-de-autorização (token) cadastrada no sistema.
    const chaveCadastradaNoSistema = "digitalhouse";
    // Armazeno o resultado da comparação da chave cadastrada no sistema com a chave enviado pelo usuário.
    const chaveValida = chaveCadastradaNoSistema == chave;
    
    /*
        Condicional de validação da chave.
            - Se a chave do usuário for igual a chave cadastrada no sistema:
                - Autorizo o enviando para o controle.
            - Caso contrário:
                - Envio uma mensagem pedido que se identifique.
    */
    if(chaveValida) {
        autorizar();
    }
    else {
        resposta.send('Identifique-se por favor!');
    }

}

module.exports = { autorizarPorToken }