const Router = require('express').Router
const products = require('./handler/products/products')
const product = require('./handler/products/create-product')
const singleProduct = require('./handler/products/get-product')
const updateProduct = require('./handler/products/update-product')
const deleteProduct = require('./handler/products/delete-product')

const orders = require('./handler/orders/orders')
const order = require('./handler/orders/create-order')
const singleOrder = require('./handler/orders/single-order')
const deleteOrder = require('./handler/orders/delete-order')

module.exports = (app) => {

    const router = new Router()

    router.get('/products', products)
    router.post('/product',product)
    router.get('/products/:productId',singleProduct)
    router.patch('/products/:productId',updateProduct)
    router.delete('/products/:productId',deleteProduct)

    router.get('/orders',orders)
    router.post('/order',order)
    router.get('/orders/:orderId', singleOrder)
    router.delete('/orders/:orderId',deleteOrder)

    app.use((req,res,next) => {
        res.header('Access-Control-Allow-Origin','*')
        res.header('Access-Control-Allow-Headers','Orgin, X-Requested-With, Content-Type, Accept, Authorization')
        if(req.method === 'OPTIONS')
        {
            res.header('Access-Control-Allow-Methods','GET, PUT, POST, PATCH, DELETE')
            return res.status(200).json({})
        }
        next();
    })

    app.use(router)
}