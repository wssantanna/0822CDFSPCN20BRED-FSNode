// 1. Operadores Matemáticos.

// 1.1.0. Atribuição de valores.
let valor1 = 29;
let valor2 = 83;

// 1.1.1. Soma dos valores.
let soma = valor1 + valor2;

// 1.1.2. Subtração dos valores.
let subtracao = valor1 - valor2;

// 1.1.3.  Multplicação dos valores.
let multiplicacao = valor1 * valor2;

// 1.1.4. Divisão dos valores.
let divisao = valor1 / valor2;

// 1.1.5. Resto da divisão.
let restoDaDivisao = valor1 % valor2;

// 1.1.6. Potênciação dos valores... peguei pesado aqui.
let potencia = valor1 ** valor2;

// 1.1.7. Dividindo dois grupos de operações matermáticas, onde o resultado do primeiro é multiplicado pelo segundo grupo.
let multiplasOperacoesMatematicas = (valor1 + valor2) * (valor1 - valor2);

// 1.2. Resultado da Operações matemáticas
console.log("------ Operadores Matemáticos ------");
console.log("Resultado da Soma", soma);
console.log("Resultado da Subtração", subtracao);
console.log("Resultado da Multiplicação", multiplicacao);
console.log("Resultado da Divisão", divisao);
console.log("Resultado da Resto da Divisão", restoDaDivisao);
console.log("Resultado da Potência", potencia);

// 2. Operadores lógicos.

let valor3 = 5;
let valor4 = 11;
let valor5 = "5";

// 2.1.1. Comparação se os valores são iguais.
let igualdade = valor3 == valor5;

// 2.1.2. Comparação se os valores são diferentes.
let diferenteDe = valor3 != valor4;

// 2.1.3. Comparação se os valores são iguais e o tipo também.
let igualdadeEstrita = valor3 === valor5;

// 2.1.4. Comparação se os valores são diferentes e o tipo também.
let diferenteDeEstrita = valor3 !== valor5;

// 2.1.5. Comparação se o primeiro valor é maior que o segundo.
let maiorQue = valor3 > valor4;

// 2.1.6. Comparação se o primeiro valor é menor que o segundo.
let menorQue = valor3 < valor4;

// 2.1.7. Comparação se o primeiro é maior ou igual que o segundo.
let maiorOuIgualQue = valor3 >= valor4;

// 2.1.8. Comparação se o primeiro é menor ou igual que o segundo.
let menorOuIgualQue = valor3 <= valor4;

// 2.1.9. Utilizando duas ou comparações lógicas. 
// Os dois valores precisão ser verdadeiro.
let operadorLogicoAND = igualdade && maiorQue;
// Ou um dos dois valores precisa ser verdadeiro.
let operadorLogicoOR = igualdade || igualdadeEstrita;

// 2.2. Resultado da Operações lógica.
console.log("------ Operadores Lógicos ------");
console.log("É igual?", igualdade);
console.log("É diferente?", diferenteDe);
console.log("É a mesma coisa (valor e tipo)?", igualdadeEstrita);
console.log("É totalmente diferente (valor e tipo)?", diferenteDeEstrita);
console.log("É maior que?", maiorQue);
console.log("É menor que?", menorQue);
console.log("É maior ou igual que?", maiorOuIgualQue);
console.log("É menor ou igual que?", menorOuIgualQue);
console.log("Operador AND", operadorLogicoAND);
console.log("Operador OR", operadorLogicoOR);
