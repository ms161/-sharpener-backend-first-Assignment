const express=require('express')
const path=require('path')
const router=express.Router()
const rootDir=require('../util/path')
const shopModel=require('../controllers/products')
router.get('/',shopModel.shop)
    module.exports=router
    


    
