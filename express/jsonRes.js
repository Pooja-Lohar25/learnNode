//sending json as response 
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json([{"name":"pooja"},{"surname":"Lohar"}])
})

app.listen(5000,(err)=>{
    if(err) console.log(err)
    else console.log("server listening at 5000")
})