
const Db = require('./__mock-database__');

// function getNumberOfItems() {}
function obterQuantidadeDeItems() {
    
    const quantidadeDeItems = Db.items.length;

    return quantidadeDeItems;
}

// function getNumberOfEmployees() {}
function obterQuantidadeDeFuncionarios() {
    
    const quantidadeDeFuncionarios = Db.funcionarios.length;

    return quantidadeDeFuncionarios;

}

// function getNumberOfPagesFromNumberOfItems() {}
function obterQuantidadeDePaginasApartirDoNumeroDeItems(quantidadeDeItemsPorPagina = 5) {
    
    const quantidadeDeItems = Db.items.length;

    const quantidadeDePaginas = quantidadeDeItems / quantidadeDeItemsPorPagina;

    return quantidadeDePaginas;
}

// function getEmployees() {}
function obterFuncionarios() {
    
    const listaDeFuncionarios = Db.funcionarios;

    return listaDeFuncionarios;
}

// function getItems() {}
function obterItems() {

    const listaDeItems = Db.items;

    return listaDeItems;
}

// function getItemById(IdItem) {}
function obterItemPorId(idItem) {

    const listaDeItems = Db.items;

    const itemEncontrado = listaDeItems.find(item => item.id === idItem);

    return itemEncontrado ? itemEncontrado : `Não foi possível encontrar o item de id ${idItem}.`;
}

// function getEmployeeById(idEmployee) {}
function obterFuncionarioPorId(idFuncionario) {

    const listaDeFuncionarios = Db.funcionarios;

    const funcionarioEncontrado = listaDeFuncionarios.find(funcionario => funcionario.id === idFuncionario);

    return funcionarioEncontrado ? funcionarioEncontrado : `Não foi possível encontrar o funcionário de id ${idFuncionario}.`;
}
 
// function getEmployeesByPosition(position) {}
function obterFuncionariosPorCargo(cargoDoFuncionario) {

    const listaDeFuncionarios = Db.funcionarios;

    const funcionariosFiltradosPorCargo = listaDeFuncionarios.filter(funcionario => funcionario.cargo === cargoDoFuncionario);

    return funcionariosFiltradosPorCargo ? funcionariosFiltradosPorCargo : `Não há funcionários cadastrados no cargo ${cargoDoFuncionario}.`;
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

module.exports = { 
    obterQuantidadeDeItems, 
    obterQuantidadeDeFuncionarios,
    obterQuantidadeDePaginasApartirDoNumeroDeItems,
    obterFuncionarios,
    obterItems,
    obterItemPorId,
    obterFuncionarioPorId,
    obterFuncionariosPorCargo
}