# Desafio do professor - Introdução à Express

## Proposta

Estimular a análise e implementação de algorítimos focados em solucionar problemas tecnologicos; compreender o fluxo de trabalho em uma aplicação `express` como interface para o protocolo `HTTP`. 

## Instruções

1 . Com base no código-fonte, implemente as soluções a seguir.

[Download do código-fonte](./MyMathApi.zip)

- [ ] **GET** Crie rotas para realizar operações matemáticas, conforme a tabela a seguir.

| Rota | Exemplo | Resposta |
| --- | --- | --- |
| http://localhost:12345/somar/:valor1/:valor2 | http://localhost:12345/somar/2/2 | 4 |
| http://localhost:12345/subtrair/:valor1/:valor2 | http://localhost:12345/subtrair/2/2 | 0 |
| http://localhost:12345/multiplicar/:valor1/:valor2 | http://localhost:12345/multiplicar/4/4 | 16 |
| http://localhost:12345/dividir/:valor1/:valor2 | http://localhost:12345/dividir/10/2 | 5 |

2 . Responda, o método `.send()` é responsável por...

- [ ] Enviar um `json`.
- [ ] Enviar um arquivo de texto.
- [ ] Enviar um texto.
- [ ] Forçar um download de arquivo.

3 . Responda, qual `URL HTTP` esta utilizando `params` em sua estrutura.

- [ ] http://localhost:12345/somar?valor1&valor2
- [ ] http://localhost:12345/somar/:valor1/:valor2
- [ ] http://localhost:12345/somar/
- [ ] A primeira e a segunda alternativa estão corretas.

## Conclusão

Meus parabéns pelo esforço e dedicação em implementar este desafio. Agora que consegue compreender a responsabilidade do `Express Framework` neste projeto Nodejs, e interpretar uma requisição `GET` no protocolo `HTTP`, chega o momento de compreender os tipos de requisição `GET` e respostas `HTTP`.

Documentacão `Express Framework`

- [Request - *Requisições*](https://expressjs.com/pt-br/api.html#req)
- [Response - *Respostas*](https://expressjs.com/pt-br/api.html#res)

Stackoverflow 

[What is the difference between URL parameters and query strings? - *Qual é a diferença entre URL params e query strings?*](https://stackoverflow.com/questions/39266970/what-is-the-difference-between-url-parameters-and-query-strings)

Bons estudos 🤟.