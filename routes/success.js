const express=require('express')
const path=require('path')
const router=express.Router()

const rootDir=require('../util/path')
const success=require('../controllers/products')
router.post('/success',success.success)

module.exports=router