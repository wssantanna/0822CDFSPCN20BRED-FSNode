
// Nota: É possível armazenar multiplos valores de multiplos tipos.
let deQualquerCoisa = ['Texto', 1, 1.2, {}, function() {}];

// 1. Declarando uma variável do tipo Array
//                                0        1       2         3
let listaDeComprasNoSacolao = ["Banana", "Maçã", "Pêra", "Morango"];

// Irá retornar o valor do indice 1 da lista.
// Nota: O primeiro indice de uma array é 0, portanto, o indice um é o seguindo indice de uma array.
let indiceUmDaLista = listaDeComprasNoSacolao[1];

console.log("Todos os itens da lista:", listaDeComprasNoSacolao); // "Banana", "Maçã", "Pêra", "Morango"
console.log("Qual o indice um da lista?", indiceUmDaLista); // Maçã

// 2. Métodos que modificam a lista de valores.

// 2.1. Retona o indice da Maçã.
let indiceDaMaca = listaDeComprasNoSacolao.indexOf("Maçã"); 

// 2.1.1. Nesse momento o indice da Maçã é 1.
console.log("Qual é o indice da Maçã?", indiceDaMaca); // 1

// 2.2. Retorna se o item existe na lista.
let temMangaNaLista = listaDeComprasNoSacolao.includes("Manga");
let temMacaNaLista = listaDeComprasNoSacolao.includes("Maçã");

// 2.2.1. Nesse momento não temos Manga em nossa lista.
console.log("Temos Manga na lista?", temMangaNaLista); // false

// 2.2.2. Nesse momento temos Maçã em nossa lista.
console.log("Temos Maçã na lista?", temMacaNaLista); // true

// 2.3. Nesse momento são adicionados Coco e Baterraba ao fim da lista.
listaDeComprasNoSacolao.push("Coco");
listaDeComprasNoSacolao.push("Beterraba");

// 2.3.1. 
console.log("Todos os itens da lista atualizada após adicionar Coco e Beterraba:", listaDeComprasNoSacolao);  // "Banana", "Maçã", "Pêra", "Morango", "Coco", "Beterraba"

// 2.4. Nesse momento é removido o último item da lista.
listaDeComprasNoSacolao.pop();

// 2.4.1.
console.log("Todos os itens da lista atualizada pós remover o último item:", listaDeComprasNoSacolao); // "Banana", "Maçã", "Pêra", "Morango", "Coco"

// 2.5. Nesse momento removemos o primeiro item da lista, no caso Banana.
listaDeComprasNoSacolao.shift(); // "Maçã", "Pêra", "Morango", "Coco"

// 2.5.1. 
console.log("Todos os itens da lista atualizada pós remover o primeiro item:", listaDeComprasNoSacolao);

// 2.6. Nesse momento adicionamos Abacate no primeiro indice da lista.
listaDeComprasNoSacolao.unshift("Abacate");  // Abacate, "Maçã", "Pêra", "Morango", "Coco"

// 2.6.1. 
console.log("Todos os itens da lista atualizada pós adicionar um elemento no início:", listaDeComprasNoSacolao);

// 3. Métodos array retornam uma cópia da variável modificada.

// 3.1. 
let listaSeparadaComTraco = listaDeComprasNoSacolao.join(" - ");
let listaSeparadaComVirgula = listaDeComprasNoSacolao.join(", ");
let listaSeparadaComPontoVirgula = listaDeComprasNoSacolao.join("; ");

// 3.1.1. 
console.log("Todos os itens da lista separados por traço:", listaSeparadaComTraco);
console.log("Todos os itens da lista separados por virgula:", listaSeparadaComVirgula);
console.log("Todos os itens da lista separados por ponto e virgula:", listaSeparadaComPontoVirgula);

// 3.1.2. Note que a variável original não é modificada pelo método join()
console.log("Resultado final de todos os itens da lista", listaDeComprasNoSacolao);