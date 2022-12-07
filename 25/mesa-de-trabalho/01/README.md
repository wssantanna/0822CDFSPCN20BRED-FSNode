# Mesa de trabalho

## Proposta 

Esperamos nessa atividade estimular a colaboração do grupo no processo de implementação de soluções utilizando a linguagem Javascript.

## Instruções

1. Com base no código a seguir, implemente uma solução para cada problema proposto.


```js
// Essa é a lista de filmes disponibilizada pelo professor inicialmente.
let listaDeFilmes = ["Clube dos Cinco", "A Hora do Pesadelo", "Karatê Kid", "Rocky IV", "Conan, o Bárbaro", "Highlander"];

// 1.1. Apresenta todos os filmes da lista separados por ponto e vírgula.
function apresentaTodosOsFilmesSeparadosPorPontoVirgula() {

}

// 1.1. Apresentar quantidade de filmes da lista.
function quantidadeTotalDeFilmes() {

}

// 1.3. Buscar o nome do filme de acordo com seu índice.
function buscarNomeDoFilmePeloIndice(indiceDoFilme) {

}

// 1.4. Adiciona um novo filme a lista pelo seu nome.
function adicionaUmNovoFilmePeloSeuNome(nomeDoFilme) {

}

// 1.5. Atualiza um filme a partir do seu índice na lista.
function atualizarUmFilmePeloSeuIndice(indiceDoFilme) {

}

// 1.6. Listar todos os filmes com seu índice/posição na lista.
function listarTodosOsFilmesComSeuIndiceNaLista() {

}

// 1.7. Listar filmes por quantidade.
function listarFilmesPorQuantidade(quantidadeDeFilmesDesejada) {

}

// 2. Resultado esperado em sua solução.
console.log("------ Resultados da Atividade ------");

// Retorna Clube dos Cinco; A Hora do Pesadelo; Karatê Kid; Rocky IV; Conan, o Bárbaro; Highlander
console.log("1. Lista de todos os filmes separados por ponto e virgula", apresentaTodosOsFilmesSeparadosPorPontoVirgula());

// Retorna o número 7.
console.log("2. Retorna a quantidade de filmes da lista", quantidadeTotalDeFilmes());

// Se o índice for 0, retorna Clube dos Cinco;
console.log("3. Buscar um filme pelo indice", buscarNomeDoFilmePeloIndice(0)); 

// Se o filme for Sexta-feira 13th, retorna Clube dos Cinco; A Hora do Pesadelo; Karatê Kid; Rocky IV; Conan, o Bárbaro; Highlander, Sexta-feira 13th
console.log("4. Adiciona um filme pelo nome", adicionaUmNovoFilmePeloSeuNome("Sexta-feira 13th"));

// Se o índice for 3 e o nome for atualizado para Rocky III, retorna Clube dos Cinco; A Hora do Pesadelo; Karatê Kid; Rocky III; Conan, o Bárbaro; Highlander, Sexta-feira 13th
console.log("5. Atualizar um filme pelo seu índice", atualizarUmFilmePeloSeuIndice(3));

// Retorna 
// 0 - Clube dos Cinco 
// 1 - A Hora do Pesadelo 
// 2 - Karatê Kid
// 3 - Rocky III
// 4 - Conan, o Bárbaro
// 5 - Highlander
// 6 - Sexta-feira 13th
console.log("6. Listar todos os filmes com seu indice/posicao na lista.", listarTodosOsFilmesComSeuIndiceNaLista());

// Listar os filmes por quantidade, no caso se o valor for 3 irá retornar 
// Clube dos Cinco 
// A Hora do Pesadelo 
// Karatê Kid
console.log("7. Lista quantidade de filmes desejado pelo usuário", listarFilmesPorQuantidade(3))
```

2. Responda, quais métodos do objeto Array foram utilizados para resolução desse problema?

- [ ] `insert()`, `delete()`, `update()` e `reader()`.
- [ ] `push()`, `shift()`, `unshift()`, `length` e `join()`.
- [ ] Variáveis, funções, parâmetros, retorno de função, `push()`, `shift()`, `unshift()`, `length` e `join()`.
- [ ] Nenhuma das alternativas anteriores.

<details><summary>Resposta</summary>
<p>

- [x] Variáveis, funções, parâmetros, retorno de função, `push()`, `shift()`, `unshift()`, `length` e `join()`.

</p>
</details>

3. Responda, quais tipos de variáveis é retornada pela função `apresentaTodosOsFilmesSeparadosPorPontoVirgula()`?

- [ ] `Array`.
- [ ] `string`.
- [ ] `boolean`.
- [ ] `object`.


<details><summary>Resposta</summary>
<p>

- [x] `Array`.
- [x] `string`.

</p>
</details>

## Conclusão

Espero que tenha curtido implementar esta solução com sua equipe. Na próxima aula abordaremos novos recursos da linguagem Javascript que vão permitir agrupar propriedades; exportar e importar dados; e aperfeiçoar o processo de reaproveitamento de trechos de código. A propósito, é sempre bom ter uma colinha, não é mesmo?! Preparei uma **[lista dos principais métodos `Array`](../dicas/)** com descrições para você consultar sempre que precisar.
