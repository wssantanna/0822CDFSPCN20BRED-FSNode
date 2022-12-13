let perfil = {
    nome: 'Willian',
    sobrenome: 'Sant Anna'
}

// Acessar valores de um objeto literal
perfil.nome; // 'Willian'
perfil[nome]; // 'Willian' 

// Utilizando ciclo de repetição for com operador in para acessar cada item de uma lista.
for(let propriedade in perfil) {
    console.log(`1. for in em um Objeto literal - ${propriedade}: ${perfil[propriedade]}`);
}

// Utilizando ciclo de repetição for em uma Array de objetos literais.
let listaDeComprasNoSacolao = [
    {
        nome: 'Uva',
        quantidade: 1
    },
    {
        nome: 'Maçã',
        quantidade: 10
    },
    {
        nome: 'Banana',
        quantidade: 6
    }
];

// Armazeno a quantidade de itens da lista de frutas.
let quantidadeDeItensDaListaDeCompras = listaDeComprasNoSacolao.length;

// 1. Utilizando ciclo de repetição for para acessar cada item de uma lista.
//  valor inicial ; condicional                       ; modificador)
for(let indice = 0; indice < quantidadeDeItensDaListaDeCompras; indice++) {

    // Armazeno o item da lista conforme o indice.
    let item = listaDeComprasNoSacolao[indice];

    // Apresento o item no terminal.
    console.log(`1. for - ${item.nome} - ${item.quantidade}`);
}

// 2. Utilizando ciclo de repetição forEatch para acessar cada item da lista.

listaDeComprasNoSacolao.forEach(function(item) {
    console.log(`2. forEach - ${item.nome} - ${item.quantidade}`);
});

// 3. Utilizando ciclo de repetição for of para acessar cada item da lista e suas propriedades.

for (item of listaDeComprasNoSacolao) {
    console.log(`3. for of - ${item.nome} - ${item.quantidade}`);
}