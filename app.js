const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const adminRoutes=require('./routes/admin')

const shopRoutes=require('./routes/shop') 
const contactUs=require('./routes/contactUs') 
const success=require('./routes/success')
const app=express()
const err=require('./controllers/errors')
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/shop',shopRoutes)
app.use('/admin',adminRoutes)
app.use(contactUs)
app.use(success)


app.get('/',(req,res)=>{
  res.send('this is shop')
})
app.use(err.error404)




 app.listen(3000)




