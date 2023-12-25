const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const adminRoutes=require('./routes/admin')

const shopRoutes=require('./routes/shop') 
const contactUs=require('./routes/contactUs') 
const success=require('./routes/success')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/shop',shopRoutes)
app.use('/admin',adminRoutes)
app.use(contactUs)
app.use(success)


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))

})
app.get('/',(req,res)=>{
  res.send('this is shop')
})




 app.listen(3000)




