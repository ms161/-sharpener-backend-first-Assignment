const express=require('express')


const app=express()

 app.use((req,res,next)=>{
    res.send('this is express')
    next()
 })

 
 app.listen(3000)