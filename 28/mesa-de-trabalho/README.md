# Mesa de trabalho - Introdução à Express

## Proposta

Esperamos nessa atividade estimular a compreensão e prática de configuração de um projeto Nodejs com `npm` e `Express Framework`.

## Instruções

1 . Crie e configure um projeto Nodejs utilizando `Express Framework`.

- [ ] Inicialize o projeto com `npm`
    - [ ] Crie uma pasta com o nome *MyFirstApi*.
    - [ ] Abra o terminal e se certifique que está dentro da pasta do projeto que acabou de criar.
    - [ ] Execute o comando `npm init` e responda o restionário que o npm apresentará no terminal.

- [ ] Instale o `Express Framework` em seu projeto.

    - [ ] Execute o comando `npm install express`.

- [ ] Instale a ferramenta `nodemon` em seu projeto.

    - [ ] `npm install --save-dev nodemon`

- [ ] Crie um documento na raiz da pasta com nome `app.js`.

> **Nota:** O nome do arquivo não tem relevância. Você poderá encontrar variações como `server.js`, `index.js`, `api.js`, etc.

- [ ] Escreva o código a seguir no arquivo `app.js`.

```js
const express = require('express')

const app = express()

app.listen(12345, function() {
    console.log('Tudo okay!')
})
```

> **Nota:** Sei que é tentador apenas copiar o código-fonte e colar em seu arquivo, porém o processo de escrever e muitas vezes utilizar comentários, facilitará a compreensão e memorização dos comandos. Nessa fase inicial, fuja de auto completadores de comandos.

- [ ] Crie no arquivo `package.json` na chave `scripts`, comandos para inicializar o projeto em produção e em desenvolvimento, conforme o exempo a seguir:

```json
{
    "scripts": [
        "executar:producao": "node app.js",
        "executar:desenvolvimento": "nodemon app.js"
    ]
}
```

- [ ] Execute no terminal o comando `npm run executar:desenvolvimento` para testar a aplicação. Se tudo estiver okay, o terminal irá retornar a seguinte mensagem:

```cmd
Tudo okay!
```

2 . Responda, o comando `app.listen(12345, function() { console.log('Tudo okay!') })` é responsável por...

- [ ] Definir uma rota `http` para acesso a aplicação. 

- [ ] Definir a porta de acesso a aplicação e qual função será executada nesta porta no momento que a aplicação ser inicializado.

- [ ] Inicializar a aplicação.

- [ ] Todas as alternativas anteriores.

3 . Responda, é incorreto afirmar que a dependência `Express Framework`

- [ ] Servir como **Interface** para clientes se comunicarem com a aplicação a partir do protocolo `HTTP`.

- [ ] A partir de uma interface `HTTP` recebe e responde as requisições realizadas para aplicação.

- [ ] É uma ferramenta de desenvolvimento.

- [ ] É uma *framework* Nodejs.

## Conclusão

Agora que temos um modelo de projeto Nodejs utilizando `Express Framework` implementado, podemos seguir com mais atividades e desafios. Preparei um [desafio delicinha](../desafio/) para você explorar ainda mais recursos do `Express`. Bons estudos 🤟.