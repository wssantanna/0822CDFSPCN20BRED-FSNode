# Mesa de trabalho - O que são padrões e projeto?

## Proposta

Esperamos nessa atividade estimular a compreensão de design de código e a arquitetura MVC (*model*, *view*, *controler*).

## Instruções

1 . Com base no código fonte a seguir:

```js
// Importei o express.
const express = require('express');
// Criei uma instância (copia) do express.
const api = express();

// Criei uma rota para receber os valores via parametros.
api.get('/somar?', (req, res) => {

    // Separo os valores das variáveis valor1 e valor2.
    let { valor1, valor2 } = req.query;

    // Converto os valores em texto (string) para número (number).
    valor1ConvertidoEmNumero = parseFloat(valor1);
    valor2ConvertidoEmNumero = parseFloat(valor2);

    // Somo os dois valores e armazeno os resultado na variável "resultadoDaSoma".
    const resultadoDaSoma = valor1ConvertidoEmNumero + valor2ConvertidoEmNumero;

    // Retorno o resultado via HTTP no express.
    res.send(`Resultado: ${resultadoDaSoma}`);

});

// Inicializo o servidor na porta 12345.
api.listen('12345', () => console.log('Servidor Okay!'));
```

- [ ] **Separe da rota o controlador** responsável pela soma de dois valores no arquivo *somar.controller.js*.

> **Nota:** O código fonte esta presente no arquivo [`servidor.js`](./src/servidor.js). 

2 . Responda, no trecho de código `let { valor1, valor2 } = req.query` separamos e capturamos os valores recebidos via `HTTP`. **Qual é o formato correto** do envio dos valores para API.

- [ ] `http://localhost:12345/somar?valor1=5,valor2=5`

- [ ] `http://localhost:12345/somar&valor1=5&valor2=5`

- [ ] `http://localhost:12345/somar?valor1=5&valor2=5`

- [ ] `http://localhost:12345/somar?valor1=5?valor2=5`

3 . Responda, é **incorreto** afirmar que *MVC* é:

- [ ] Um padrão de **arquitetura de projeto**.

- [ ] **É uma ferramenta** do *Express*.

- [ ] **É um acrônimo** para *model*, *view*, *controller*.

- [ ] No MVC, o C-ontroller **é resonsável por receber e responder as requisições** do usuário.

## Conclusão

Bons estudos 🤟. 

------

## Resolução da atividade

- [Código fonte da resolução](../atividade-resolvida/MyDollarQuoteAPI/).