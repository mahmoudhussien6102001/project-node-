const express=require('express')
const path=require('path')
require('./db/mongoose')
const bodyParser=require('body-parser')
const clothRoute=require('./routes/clothRoute')
const userRoute=require('./routes/userRoute')
const app=express()


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')))

app.use('/cloths',clothRoute)
app.use('/cloths',userRoute)


app.all('/cloths/*',(req,res,next)=>{
    res.status(404).render('404')
    next()
  })
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})