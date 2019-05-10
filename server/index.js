
const express = require('express')
const app = express()
const getProducts = require('./getProducts.js')
const getProduct = require('./getProduct.js')


// declaring the port that server will be listening from
const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`))


// endpoint that will send product data to the client side as an array of products
app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)

