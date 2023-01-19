
/*
    Opcão 1
*/
const HomeController = (req, res) => {
    res.send('Bem vindo à API Calculadora básica');
}

/*
    Opção 2

    function HomeController(req, res) {
        res.send('Servidor está no ar!');
    }
*/

module.exports = HomeController;