const cloudStorage = require("./firebase/cloudStorage");

const collection = cloudStorage.collection("productos");

async function add(producto){
    const documentoProducto = collection.doc();
    await documentoProducto.set(producto);
}

async function getById(id){
    let documentoProducto = await collection.doc(id).get();
    if(documentoProducto.exists){
        return documentoProducto.data();
    }else{
        return null;
    }
}

async function get(){
    let query = await collection.orderBy("nombre").get();
    return query.docs.map(doc => ({...doc.data(), id: doc.id}));
}

async function update(producto){
    const documentoProducto = await collection.doc(producto.id);
    delete producto.id;
    return await documentoProducto.update(producto);
}

module.exports = {
    add,
    getById,
    get,
    update
}