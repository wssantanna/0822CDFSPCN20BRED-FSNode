


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