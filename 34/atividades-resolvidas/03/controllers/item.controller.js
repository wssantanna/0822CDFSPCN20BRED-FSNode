const itemModel = require('../models/item.model')

function requererItems(_, res) {

    const items = itemModel.obterItems();

    res.render('items', items);
}

module.exports = { requererItems }