const productosService = require("../services/productos");

async function addProducto(producto) {
    return await productosService.add(producto);
}

async function getProductos() {
    return await productosService.get();
}

async function getProducto(id) {
    return await productosService.getById(id);
}

async function updateProducto(id, producto){
    producto.id = id;
    return await productosService.update(producto);
}

module.exports = {
    addProducto,
    getProductos,
    getProducto,
    updateProducto
}