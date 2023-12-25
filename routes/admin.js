const express = require('express')
const Router = express.Router()
const path=require('path')

const rootDir=require('../util/path')

Router.get('/addproduct', (req, res, next) => {
res.sendFile(path.join(rootDir,'views','add-product.html'))
})

Router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/shop')
})


module.exports = Router
