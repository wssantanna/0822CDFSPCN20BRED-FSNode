# Dica do professor - Listas e ciclos de repetição

## Principais métodos do objeto Array

### A. Adicionar, remover, atualizar, ler e mesclar

#### Adicionar valores

```js
let listaDeLivros = ['Senhor dos Anéis: As Duas Torres'];

// Irá adicionar no fim da lista.
listaDeLivros.push('Senhor dos Anéis: O Retorno do Rei');

// Irá adicionar no início da lista.
listaDeLivros.unshift('O Senhor dos Anéis: A sociedade do Anel');

// O retorno esperado será ['O Senhor dos Anéis: A sociedade do Anel', 'Senhor dos Anéis: As Duas Torres', 'Senhor dos Anéis: O Retorno do Rei'];
console.log(listaDeLivros);
```

#### Remover valores

```js
let listaDeFilmes = ['Rocky','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed', 'Creed II'];

// Irá remover o último da lista.
listaDeFilmes.pop();

// O retorno esperado será ['Rocky','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed'];
console.log(listaDeFilmes); 

// Irá remover no primeiro da lista.
listaDeFilmes.shift();


// O retorno esperado será ['Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed'];
console.log(listaDeFilmes); 

// Irá remover o elemento de índice 3.
listaDeFilmes.slice(3, 1);

// O retorno esperado será ['Rocky II', 'Rocky III', 'Rocky IV', 'Creed'];
console.log(listaDeFilmes); 
```

**Nota:**  O código-fonte utilizado para exemplo tem seus resultados gerados com base na instrução anterior.

#### Atualizar valores

```js
let listaDeFilmes = ['Rocky','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed', 'Creed II'];

// Irá atualizar o elemento de índice 0 de Rocky para Rocky I.
listaDeFilmes[0] = 'Rocky I';

// O retorno esperado será ['Rocky I','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed', 'Creed II'];
console.log(listaDeFilmes); 

// Irá atualizar o elemento de índice 0 de Rocky para Rocky I.
listaDeFilmes.slice(0, 0, 'Rocky');

// O retorno esperado será ['Rocky','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed', 'Creed II'];
console.log(listaDeFilmes); 

// Irá atualizar o elemento de índice 0 até 5 para Coleção Rocky Balboa.
listaDeFilmes.slice(0, 4, 'Coleção Rocky Balboa');

// O retorno esperado será ['Coleção Rocky Balboa', 'Creed', 'Creed II'];
console.log(listaDeFilmes); 
```

#### Ler valores

```js
let listaDeFilmes = ['Rocky','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed', 'Creed II'];

// O retorno esperado será…
console.log(listaDeFilmes[0]); // Rocky
console.log(listaDeFilmes[1]); // Rocky II
console.log(listaDeFilmes[2]); // Rocky III
console.log(listaDeFilmes[3]); // Rocky IV
console.log(listaDeFilmes[4]); // Rocky V
console.log(listaDeFilmes[5]); // Creed
console.log(listaDeFilmes[6]); // Creed II
```

#### Mesclar lista de valores

```js
let num1 = [0,1,2];
let num2 = [3,4,5];
let num3 = [6,7,8];

// Irá mesclar as três listas.
let num = num1.concat(num2, num3);

// O retorno esperado será [0,1,2,3,4,5,6,7,8];
console.log(num);
```

#### Quantidade de itens da lista

```js
let listaDeFilmes = ['Rocky','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed', 'Creed II'];

// O retorno esperado será 7.
console.log(listaDeFilmes.length);
```

### B. Métodos de ciclo em listas

#### Mapear valores

```js
let valores = [0,1,2,3,4,5,6,7,8,9];

let valoresDobrados = valores.map(function(valorAtual) { 

    let valorAtualDobrado = valorAtual * 2;

    return valorAtualDobrado;
});

// O retorno esperado será [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(valoresDobrados);
```

#### Filtrar valores

```js
let valores = [0,1,2,3,4,5,6,7,8,9];

let valoresPares = filter(function(valorAtual) {

    let valorPar = (valorAtual % 2) == 0;

    return valorPar;
});

// O retorno esperado será [0, 2, 4, 6, 8]
console.log(valoresPares);
```

#### Buscar valores

```js
let valores = [0,1,2,3,4,5,6,7,8,9];

let buscarPorMaiorQueDois = valores.find(function(valorAtual) {

    let valorMaiorQueDois = valorAtual > 2;

    return valorMaiorQueDois;
});

// O retorno esperado será 3.
console.log(buscarPorMaiorQueDois);
``` 

#### Reduzir valores

```js
let valores = [0,1,2,3,4,5,6,7,8,9];

let somarValores = valores.reduce(function(valorAcumulado, valorAtual) {
    
    let resultadoDaSoma = valorAcumulado + valorAtual;

    return resultadoDaSoma;
});

// O retorno esperado será 45.
console.log(somarValores);
```

#### Verificar se contém valor

```js
let valores = [0,1,2,3,4,5,6,7,8,9];

let temValorDois = valores.includes(2); 
let temValorDez = valores.includes(10);

// O retorno esperado será true.
console.log(temValorDois);

// O retorno esperado será false.
console.log(temValorDez);
```

#### Testar se pelo menos um valor passa no teste

```js
let valores = [0,1,2,3,4,5,6,7,8,9];

valores.some(function(valorAtual) {
    
    let valorMaiorQueCinco = valorAtual > 5;

    return valorMaiorQueCinco;
});
```

#### Testar se todos valores passam no teste

```js
let valores = [0,1,2,3,4,5,6,7,8,9];

valores.every(function(valorAtual) {

    let valorMaiorQueCinco = valorAtual > 5;

    return valorMaiorQueCinco;
});
```


### C. Convertendo listas em texto 

```js
let listaDeFilmes = ['Rocky','Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Creed', 'Creed II'];

let listaDeFilmesSeparadoPontoVirgula = listaDeFilmes.join('; '); 
```

