const express = require('express')
const Router = express.Router()
const path=require('path')

const rootDir=require('../util/path')
const product=require('../controllers/products')
Router.get('/addproduct', product.getAddProduct)

Router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/shop')
})


module.exports = Router
