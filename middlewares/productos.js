
function validateProducto(req, res, next) {
    let producto = req.body;

    if(!producto.precio || typeof producto.precio !== "number"){
        return res.status(400).json({error: "El campo precio es invalido o inexistente"});
    }

    next();
}

module.exports = {
    validateProducto
}