
function autorizar(req, res, next) {
    // localhost:1234/produtos?token=dh
    const { token } = req.query

    if(token != "dh")
        res.send("Não tem autorização")
    else 
        next()
}

module.exports = autorizar