const express=require('express')
const router=express.Router()
const path=require('path')

const rootDir=require('../util/path')

router.get('/contactUs',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'))
})

module.exports=router