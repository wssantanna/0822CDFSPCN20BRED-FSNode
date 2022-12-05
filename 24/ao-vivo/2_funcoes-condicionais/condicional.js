let alturaDoUsuario = 1.56;
let idadeDoUsuario = 10;

const ALTURA_RECOMENDADA = 1.30;
const IDADE_RECOMENDADA = 13;

let usuarioTemAlturaRecomendada = alturaDoUsuario > ALTURA_RECOMENDADA;
let usuarioTemIdadeRecomendada = idadeDoUsuario >= IDADE_RECOMENDADA;
let usuarioTemTodosCriteriosRecomendados = usuarioTemAlturaRecomendada && usuarioTemIdadeRecomendada;
let usuarioTemPeloMenosUmCriterioRecomendado = usuarioTemAlturaRecomendada || usuarioTemIdadeRecomendada;

// 1. if...else

console.log('--- 1. if...else');

if(usuarioTemAlturaRecomendada) {
    console.log('O usuario tem a altura recomendada.');
}
else {
    console.log('O usuario nao tem a altura recomendada.');
}

if(usuarioTemIdadeRecomendada) {
    console.log('O usuario tem a idade recomendada.');
}
else {
    console.log('O usuario nao tem a idade recomendada.');
}

if(usuarioTemPeloMenosUmCriterioRecomendado) {
    console.log('Seja bem vindo maior Montanha Russa do Mundo.');
}
else {
    console.log('Sinto muito, voce nao pode andar no brinquedo.');
}

if(usuarioTemTodosCriteriosRecomendados) {
    console.log('Seja bem vindo maior Montanha Russa do Mundo.');
} 
else {
    console.log('Sinto muito, voce nao pode andar no brinquedo.');
}

// 2. if...else... operador &&

console.log('--- 2. if...else... operador &&');

if(usuarioTemTodosCriteriosRecomendados) {
    console.log('Seja bem vindo maior Montanha Russa do Mundo.');
} 
else {
    console.log('Sinto muito, voce nao pode andar no brinquedo.');
}

// 3. if...else... operador ||

console.log('--- 3. if...else... operador ||');

if(usuarioTemPeloMenosUmCriterioRecomendado) {
    console.log('Seja bem vindo maior Montanha Russa do Mundo.');
} 
else {
    console.log('Sinto muito, voce nao pode andar no brinquedo.');
}

// 4. if...else if...else

console.log('--- 4. if...else if...else');

let usuarioNaoTemAlturaRecomendada = alturaDoUsuario < ALTURA_RECOMENDADA;
let usuarioNaoTemIdadeRecomendada = idadeDoUsuario < IDADE_RECOMENDADA;

if(usuarioNaoTemAlturaRecomendada) {
    console.log('Infelizmente voce nao tem a altura recomendada.');
}
else if(usuarioNaoTemIdadeRecomendada) {
    console.log('Infelizmente voce nao tem a idade recomendada.');
}
else {
    console.log('Seja bem vindo maior Montanha Russa do Mundo.');
}

// 5. switch...case...break...default

console.log('--- 5. switch...case...break...default');

let diaDaSemana = 6;

switch(6) {
    case 0 :
        console.log('Domingo');
    break;
    case 1 :
        console.log('Segunda-feira');
    break;
    case 2 :
        console.log('Terca-feira');
    break;
    case 3 :
        console.log('Quarta-feira');
    break;
    case 4 :
        console.log('Quinta-feira');
    break;
    case 5 :
        console.log('Sexta-feira');
    break;
    case 6 :
        console.log('Sabado');
    break;
    default:
        console.log('Nao e um valor valido!');
    break;
}