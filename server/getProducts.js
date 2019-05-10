const products = require('./products.json')

const getProducts = (req,res) => {
    const {price} = req.query
    if(price){
        const item = products.filter(product => product.price <= parseInt(price))
        console.log(item)
        return res.status(200).send(item)
    }
    res.status(200).send(products)
}

module.exports = getProducts