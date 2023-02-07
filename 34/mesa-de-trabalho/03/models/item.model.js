
const Db = require('./__mock-database__');

function obterItems() {

    const { items } = Db;

    return items;
}

module.exports = { obterItems }