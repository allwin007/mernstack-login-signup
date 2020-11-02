const router=require('express').Router()
const user=require('./userschema')

router.get('/register',(req,res)=>{

    res.send("hello from register")
})



module.exports=router;