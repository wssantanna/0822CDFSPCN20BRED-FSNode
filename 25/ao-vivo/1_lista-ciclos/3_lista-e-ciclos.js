

// Armazeno as frutas em uma variável do tipo array.
let listaDeFrutas = ["Abacaxi", "Pêra", "Maçã", "Morango"];


// Armazeno a quantidade de itens da lista de frutas.
let quantidadeDeFrutasDaLista = listaDeFrutas.length; // 4
//  let indice = 0; 0 < 4                             ; indice++
//  let indice = 1; 1 < 4                             ; indice++
//  let indice = 2; 2 < 4                             ; indice++
//  let indice = 3; 3 < 4                             ; indice++
//  let indice = 4; 4 < 4                             ; indice++
for(let indice = 0; indice < quantidadeDeFrutasDaLista; indice++) {

    // Armazeno o item da lista conforme o indice.
    // let fruta = listaDeFrutas[0] //"Abacaxi"
    // let fruta = listaDeFrutas[1] // "Pêra"
    // let fruta = listaDeFrutas[2] //"Maçã"
    // let fruta = listaDeFrutas[3] // "Morango"
    let fruta = listaDeFrutas[indice];

}

// 2. Utilizando ciclo de repetição while
let indice = 0;

while(indice < quantidadeDeFrutasDaLista) {
    console.log(`2. while - ${listaDeFrutas[indice]}.`);

    // Nota: Nesse exemplo utilizo o ciclo como modificador para condição.
    indice++;
}

// 3. Utilizando ciclo de repetição forEatch para acessar cada item da lista.

listaDeFrutas.forEach(function(fruta) {
    console.log(`3. forEach - ${fruta}`);
});


// Nota: Modifica a array Original
let valores = [0, 1, 2, 3, 4, 5];

valores.forEach(function(valor, indice, arrayOriginal) {

    // valores = 0, 1, 2, 3, 4, 5
    // indice = 0, 1, 2, 4
    // arrayOriginal = [0, 1, 2, 3, 4, 5] x 5
    let valorDobrado = valor * 2;
    
    return valorDobrado;
});

console.log(valores) // 0, 2, 4, 6, 8, 10