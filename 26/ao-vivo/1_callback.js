


/*

// Sem implementação antes da refatoração com callback

let listaDeUrls = ['google.com', 'facebook.com', 'google.com'];

function adicionarHttp(urls) {

    let listaDeUrlsComHttp = [];

    urls.forEach(function(url){
        listaDeUrlsComHttp.push(`http://${url}`);
    });

    return listaDeUrlsComHttp;
}

function adicionarHttps(urls) {

    let listaDeUrlsComHttps = [];

    urls.forEach(function(url){
        listaDeUrlsComHttps.push(`https://${url}`);
    });

    return listaDeUrlsComHttps
}

*/

// Implementação após a refatoração com callback
function modificarUrls(listaDeURLs, funcaoCallback) {
    
    let listaDeUrlsAtualizada = [];

    listaDeURLs.forEach(function(url){
        listaDeUrlsAtualizada.push(funcaoCallback(url));
    });

    return listaDeUrlsAtualizada
}

// Funções que serão utilizadas no Callback da funcão modificarUrls()
function adicionarHttp(url) {
    return `http://${url}`;
}

function adicionarHttps(url) {
    return `https://${url}`;
}

function adicionarPontoBr(url) {
    return `https://${url}.br`;
}

console.log('Adiciona http://',modificarUrls(['google.com', 'facebook.com', 'google.com'], adicionarHttp));
console.log('Adiciona https://', modificarUrls(['google.com', 'facebook.com', 'google.com'], adicionarHttps));
console.log('Adiciona https:// + .br', modificarUrls(['google.com', 'facebook.com', 'google.com'], adicionarPontoBr));

// Exemplos EXTRA:

// sem callback 

function somarEmReais(valor1, valor2) {
    return "R$ " + valor1 + valor2;
}

function subtrairReais(valor1, valor2) {
    return "R$ " + valor1 - valor2;
}

function multiplicarEmReais(valor1, valor2) {
    return "R$ " + valor1 * valor2;
}

function dividirReais(valor1, valor2) {
    return "R$ " + valor1 / valor2;
}

function somarEmDolares(valor1, valor2) {
    return "$ " + valor1 + valor2;
}

function subtrairEmDolares(valor1, valor2) {
    return "$ " + valor1 - valor2;
}

function multiplicarEmDolares(valor1, valor2) {
    return "$ " + valor1 * valor2;
}

function dividirEmDolares(valor1, valor2) {
    return "$ " + valor1 / valor2;
}

// com callback

function somar(valor1, valor2) {
    return valor1 + valor2;
}

function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    return valor1 / valor2;
}

function calcularEmReais(valor1, valor2, callbackDaOperacaoMatematica) {
    return "R$ " + callbackDaOperacaoMatematica(valor1, valor2);
}

function calcularEmDolar(valor1, valor2, callbackDaOperacaoMatematica) {
    return "$ " + callbackDaOperacaoMatematica(valor1, valor2);
}

// 
calcularEmReais(2,2, somar); // R$ 4
calcularEmReais(2,2, subtrair); // R$ 0
calcularEmReais(2,2, multiplicar); // R$ 4
calcularEmReais(2,2, dividir); // R$ 1

// 
calcularEmDolar(2,2, somar); // $ 4
calcularEmDolar(2,2, subtrair); // $ 0
calcularEmDolar(2,2, multiplicar); // $ 4
calcularEmDolar(2,2, dividir); // $ 1