# Mesa de trabalho - MVC: Controller

## Proposta

Esperamos nessa atividade estimular a compreensão de design de código e a arquitetura MVC (*model*, *view*, *controler*), implementação e configuração da camada *View* na arquitetura MVC.

## Instruções

1 . Com base no código fonte a seguir:

[Código-fonte](./MyViewApp.zip)

- [ ] **Inicialize o `npm`** no projeto;
- [ ] **Realize a instalação das dependências** do projeto:
    - [ ] Dependencias de desenvolvimento: 
        - [ ] `nodemon`.
    - [ ] Dependencias de produção:
        - [ ] `ejs`;
        - [ ] `express`.

- [ ] Implemente as **configurações para ultilização da *View***.
    - [ ] Defina qual a localização do diretório responsável pelas interfaces;
    - [ ] Defina o `ejs` como *motor de renderização* de interfaces.

- [ ] Implemente o **controlador para acessar e renderizar a *View***.
    - [ ] Implemente no arquivo `home.controller.js` a renderização da *view* `home.ejs`.

> **Nota:** O código fonte esta presente no arquivo [`servidor.js`](./src/servidor.js). 

2 . Responda, no trecho de código `api.set('view', path.join(__dirname, "views"));`, estamos...

- [ ] Definindo qual a localização do diretório responsável pelas interfaces gráficas.

- [ ] Definindo qual o motor de renderização responsável por apresentar a interface gráfica.

- [ ] Definindo qual o nome da pasta responsável pelas interfaces gráficas.

- [ ] Nenhuma das alternativas anteriores.

<details><summary>Resposta</summary>
<p>

- [x] Definindo qual a localização do diretório responsável pelas interfaces gráficas.

</p>
</details>

<br>

3 . Responda, é **correto** afirmar que ao renderizar uma *View* estamos...

- [ ] Apresentando a **inteface gráfica** com extensão `.ejs`;

- [ ] Combinando **dados** com **interface gráfica** e apresentando o resultado em tela.

- [ ] Definindo que as respostas serão uma **View**. 

- [ ] Nenhuma das alternativas anteriores.

<details><summary>Resposta</summary>
<p>

- [x] Combinando **dados** com **interface gráfica** e apresentando o resultado em tela.

</p>
</details>

<br>

## Conclusão

Bons estudos 🤟.