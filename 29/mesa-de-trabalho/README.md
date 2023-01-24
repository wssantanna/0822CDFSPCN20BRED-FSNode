# Mesa de trabalho - Revisão: Introdução à Express

## Proposta

Esperamos nessa atividade estimular a prática de revisão: Configuração de um projeto Nodejs com `npm` e `Express Framework`; Implementação de uma API.

## Instruções

1 . Implemente uma API para acessar a aplicação `app-dolar-quote` (aplicação converter **real** para **dolar**).

- [ ] Na pasta *mesa-de-trabalho/MyDollarQuoteAPI*:
    - [ ] Implemente, defina e inicialize o servidor `express` no endereço *http://localhost:19123* (porta **19123**).
- [ ] Implemente e disponibilize um controlador para acessar a recurso de conversão de real para dolar no caminho */dollar?valorEmReal* (Ex.: *http://localhost:19123/dollar?valorEmReal=200*).

> **Nota:** A função responsável por converter de real para dolar já foi implementada antecipadamente e está localizada *mesa-de-trabalho/MyDollarQuoteAPI/app-dollar-quote/index.js*.

2 . Responda, o comando `app.listen(12345, function() { console.log('Tudo okay!') })` é responsável por...

- [ ] Definir uma rota `http` para acesso a aplicação. 

- [ ] Definir a porta de acesso a aplicação e qual função será executada nesta porta no momento que a aplicação ser inicializado.

- [ ] Inicializar a aplicação.

- [ ] Todas as alternativas anteriores.

<details><summary>Resposta</summary>
<p>

- [x] Definir a porta de acesso a aplicação e qual função será executada nesta porta no momento que a aplicação ser inicializado.

</p>
</details>

<br>

3 . Responda, é incorreto afirmar que a dependência `Express Framework`

- [ ] Servir como **Interface** para clientes se comunicarem com a aplicação a partir do protocolo `HTTP`.

- [ ] A partir de uma interface `HTTP` recebe e responde as requisições realizadas para aplicação.

- [ ] É uma ferramenta de desenvolvimento.

- [ ] É uma *framework* Nodejs.

<details><summary>Resposta</summary>
<p>

- [x] É uma ferramenta de desenvolvimento.

</p>
</details>

<br>

## Conclusão

Bons estudos 🤟.

------

## Resolução da atividade

- [Código fonte da resolução](../atividade-resolvida/MyDollarQuoteAPI/).