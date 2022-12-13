/*

    Objeto Literal
    - Objetos literais são um tipo de variável object;
    - É possível acessar valores de propriedades do objeto;
    - É possível armazenar funções.

    O objeto desse desse formato é prover melhor controle 
    da manipulação de dados armazenados nele.
*/

let objetoLiteral = {
    primeiroNome: "Willian",
    sobrenome: "Sant Anna",
    nomeCompleto: function () {
        return this.primeiroNome + " " + this.sobrenome;
    },
}

console.log("------ Lista em Objeto Literal ------");

// Esta é a sintaxe do objeto literal.
console.log("Este é seu formato...", objetoLiteral);

// Observamos que o tipo do objeto literal é object.
console.log("Seu tipo é...", typeof(objetoLiteral));

// Podemos acessar valores em propriedades de um objeto literal.
console.log("É possível acessar valores via propriedades...", objetoLiteral.primeiroNome);

// Podemos utilizar funções para criar tarefas em um objeto literal.
console.log("É possível utilizar funções e operadores...", objetoLiteral.nomeCompleto());

/*

    JSON - JavaScript Object Notation
    - JSON são um tipo de variável string;
    - Não é possível acessar valores de propriedades do objeto;
    - Não é possível armazenar funções.

    O objeto desse desse formato é prover uma ampla
    compatibilidade de comunicação entre sistemas e linguagens
    de programação.
*/

// Realizei a conversão objeto literal para o formato JSON.
let listaConvertidaEmJSON = JSON.stringify(objetoLiteral);

console.log("------ Lista em JSON ------");

// Observe que existem diferenças sutís entre os formados object e json.
console.log("Este é seu formato...", objetoLiteralConvertidoEmJSON);

// Não existe um tipo JSON no javascript, portanto como propósito é trafegar texto, json é string.
console.log("Seu tipo é...", typeof(objetoLiteralConvertidoEmJSON));

// Não é possível acessar os valores de cada propriedade. Nesse exemplo irá retornar undefined.
console.log("Não acessa valores via propriedades...", objetoLiteralConvertidoEmJSON.primeiroNome);

// Nota: Você pode converter JSON para objeto literal com comando JSON.parse().s
let jsonConvertidaParaObjetoLiteral = JSON.parse(objetoLiteralConvertidoEmJSON);

console.log("O valor JSON foi convertido para Objeto Literal...", jsonConvertidaParaObjetoLiteral);