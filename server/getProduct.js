const products = require('./products.json')

// const getProduct = (req,res) => {
//     const {id} = req.params
//     const item = products.filter(product => {
//         return product.id === parseInt(id)
//     });
//     if(!item){
//         return res.status(500).send('Sorry bud, maybe try Amazon')
//     } else{
//         res.status(200).send(item)
//     }
    
// }

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if not
    const item = products.find(val => val.id === parseInt(req.params.id));
    console.log(item)
    if (!item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
}

module.exports = getProduct