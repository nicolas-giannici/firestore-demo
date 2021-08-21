const express = require('express');
const router = express.Router();
const productosLogic = require('../logic/productos');
const { validateProducto } = require('../middlewares/productos'); 
const { authenticateUser } = require('../middlewares/auth/auth');

router.get("/productos", authenticateUser, async (req, res) => {
    let productos = await productosLogic.getProductos();
    res.json(productos);
});

router.get("/productos/:id", async (req, res) => {
    try {
        let producto = await productosLogic.getProducto(req.params.id);
        if(producto !== null){
            res.json(producto);
        }else{
            res.status(404).json({message: `El producto con el id: ${req.params.id} no existe`});
        }
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
});

router.put("/productos/:id", async (req, res) => {
    let response = await productosLogic.updateProducto(req.params.id, req.body);
    res.json(response);
});

router.post("/productos", validateProducto, async (req, res) => {
    await productosLogic.addProducto(req.body);
    res.send();
});

module.exports = router;