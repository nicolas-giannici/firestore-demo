const express = require('express');
const app = express();
const productosRoute = require('./routes/productos');
const PORT =  process.env.PORT |3000;

app.use(express.json());
app.use('/api', productosRoute);


app.listen(PORT, () => console.log(`Server ready --> http://localhost:${PORT}`));