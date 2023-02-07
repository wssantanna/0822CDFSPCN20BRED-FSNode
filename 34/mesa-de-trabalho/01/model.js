
const Db = require('./__mock-database__');

// function getNumberOfItems() {}
function obterQuantidadeDeItems() {

}

// function getNumberOfEmployees() {}
function obterQuantidadeDeFuncionarios() {

}

// function getNumberOfPagesFromNumberOfItems() {}
function obterQuantidadeDePaginasApartirDoNumeroDeItems() {

}

// function getEmployees() {}
function obterFuncionarios() {

}

// function getItems() {}
function obterItems() {

}

// function getItemById(IdItem) {}
function obterItemPorId(idItem) {

}

// function getEmployeeById(idEmployee) {}
function obterFuncionarioPorId(idFuncionario) {

}
 
// function getEmployeesByPosition(position) {}
function obterFuncionariosPorCargo(cargo) {

}

// ----------- Resultados

console.log('Obter quantidade de items:', obterQuantidadeDeItems());
console.log('Obter quantidade de funcionários:', obterQuantidadeDeFuncionarios());
console.log('Obter quantidade de paginas apartir do número de items:', obterQuantidadeDePaginasApartirDoNumeroDeItems());
console.log('Obter funcionários:', obterFuncionarios());
console.log('Obter items:', obterItems());
console.log('Obter funcionário por id', obterFuncionarioPorId(1));
console.log('Obter item por id', obterItemPorId(1));
console.log('Obter funcionarios por cargo', obterFuncionariosPorCargo('assistente'));