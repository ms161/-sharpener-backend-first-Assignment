const express = require('express')
const Router = express.Router()


Router.get('/addproduct', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"> <input type="text" name="title">  <input type="text" name="title"> <button>Add product</button>  </form>')
    
})

Router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = Router