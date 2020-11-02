const express=require('express')
const app= express()
const mongoose= require('mongoose')
const port=5000
const {MONGOURI}= require('./keys')
const userRouter=require('./userRouter')



app.use('/api',userRouter)



mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

mongoose.connection.on('connected',()=>{
console.log("connected to mongoose")

})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
    
}) 
app.listen(port,()=>{
    console.log("server is runing on",port)
}) 