# 0822CDFSPCN20BRED-FSNode

## Aula 24 - Pensamento lógico com javascript 1/3

- [x] Variáveis
    - [x] `var` *vs.* `let`
    - [x] `const`

- [x] Operadores
    - [x] Aritméticos
        - [x] `+`
        - [x] `-`
        - [x] `/`
        - [x] `%`
        - [x] `**`
        - [x] `+=`
        - [x] `-=`
        - [x] `*=`
    - [x] Lógicos
        - [x] `==`
        - [x] `===`
        - [x] `!=`
        - [x] `!==`
        - [x] `<`
        - [x] `>`
        - [x] `<=`
        - [x] `>=`
        - [x] `&&`
        - [x] `||`
    -[ ] Ternários
        - [ ] `(true) ? true : false `

- [x] Funções 
    - [x] Declaração `function`
    - [x] Parametros `(params)`
    - [x] Contexto `{}`
    - [x] Métodos `()`


- [x] Condicionais*
    - [x] `if`, `else if`, `else`
    - [x] `switch`, `case`, `continue`, `break` `default`

**Conteúdo precisou ser ministrado no dia 05/12.*

## Aula 25 - Pensamento lógico com javascript 2/3

- [x] Lista de valores (`Array`)
    - [x] Declaração
    - [x] Acessando os valores através do indice
    - [x] `indexOf()`
    - [x] `includes()`
    - [x] `push()`
    - [x] `pop()`
    - [x] `shift()`
    - [x] `unshift()`
    - [x] `join()`

- [x] Ciclo de repetições
    - [x] `for()`
    - [x] `while()`
    - [x] `forEach()`

## Aula 26 - Pensamento lógico com javascript 3/3

- [x] Callbacks

- [x] Objeto literais
    - [x] Armazenando multiplos objeto em vetores
    - [x] Ciclo de repetição em vetores de objetos

- [x] JSON
    - [x] `JSON.parse()`
    - [x] `JSON.stringfy()`

## Aula 27 - Como funciona a internet? - *teórica*

- [x] Internet e Web são a mesma coisa?
- [x] Protocolo HTTP
- [x] Divisão Cliente x Servidor

## Aula 28 - Introdução à Express

- [x] Nodejs
    - [x] npm
        - [x] Dependências de produção e desenvolvimento

- [x] Express
    - [x] `get()`
        - [x] `require`
            - [x] `params`
            - [ ] `body`
            - [ ] `query`
        - [x] `response`
            - [x] `send()`
            - [ ] `sendStatus()`
            - [ ] `sendFile()`
            - [ ] `download()`
            - [ ] `json()`
            - [ ] `render()`
            - [ ] `redirect()`
    - [x] `listen()`

- [x] `http`
    - [x] `router`
        - [x] `/path`
        - [x] `/path/:paramns`
        - [ ] `/path?queries`

- [x] **BONUS**: Projeto Integrador
    - [x] [Apresentação do *Briefing*](https://docs.google.com/document/d/19o1s0FmoVinTDs-cSiBL3QHP-gKNwOOXFQz9teUW1AE/edit?usp=sharing)
    - [x] [OKR (*Objectives and key results*)](https://docs.google.com/spreadsheets/d/1DlWdf5taLUJIH6EEKfb-8IYi7ccQ6yM4U44B0BCtWYA/edit?usp=sharing)

## Aula 29 - Revisão: Introdução à Express

- [x] `npm` 
- [x] Node.js
- [x] `express`
- [x] `http` - `get`
- [x] `Request` (*Requisição*) - `paramns`, `query`

## Aula 30 - O que são padrões e projeto? - *teórica* / *prática*

- [x] Padrão de projeto
    - [x] **MVC** - *model*, *view*, *controller*
    - [x] **MVP** - *model*, *view*, *presenter*
    - [x] **MVVM** - *model*, *view*, *view-model*

- [x] *Controller* (Controlador)

- [x] Importar e exportar módulos
    - [x] `module.exports`
    - [x] `require()`

## Aula 31 - MVC: Controller

- [x] Revisão instalação, configuração, implementação das rotas e controles.

    - [x] *Controller* (Controlador)

    - [x] Importar e exportar módulos
        - [x] `module.exports`
        - [x] `require()`

    - [x] `Request` (Requisição) - `paramns`, `query`

    - [x] Importar e exportar módulos
        - [x] `module.exports`
        - [x] `require()`

- [x] *Views* (Telas - Interfaces visuais)

    - [x] Configurando a pasta responsável pela *View* - `api.set("view", CAMINHO_DINAMICO)`
    - [x] Configurando a *View Engine* - `api.set("view engine", "ejs")`;

- [x] Tipos de *Views* (Telas - Interfaces visuais)

    - [x] Estática `.html`
    - [x] Reativas / dinâmicas `.ejs`