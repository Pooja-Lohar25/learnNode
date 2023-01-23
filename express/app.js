const express = require('express')
const app = express() //server instance
const path = require('path')
//methods

/**
 * app.get -- read data
 * app.post -- insert data
 * app.put  -- update data 
 * app.delete -- delete data
 * app.use -- for middleware
 * app.listen 
 * app.all -- covers all operations
 */ 
app.use(express.static(path.resolve(__dirname,'public')))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./login.html'),(err)=>{
//         if(err) console.log(err)
//     })
// })


app.get('/newComplaint',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/newcomplaint.html'),(err)=>{
        if(err) console.log(err)
    })
})


app.all('*',(req,res)=>{
    res.status(404).send('<h1> resource not found </h1>')
})


app.listen(5000,()=>{
    console.log("server listening on port 5000....")
})