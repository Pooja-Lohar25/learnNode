const express = require('express')
const app = express() //server instance

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

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home page</h1>')
})

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>about page</h1>')
})
app.get('/contact/sam',(req,res)=>{
    res.status(200).send('<h1>yeah! sam is here</h1>')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1> resource not found </h1>')
})


app.listen(5000,()=>{
    console.log("server listening on port 5000....")
})