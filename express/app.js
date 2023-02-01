const { time } = require('console')
const express = require('express')
const path = require('path')
const app = express() //server instance
logger = (req,res,next)=>{
    const url = req.url
    const method = req.method
    const time = new Date().getTime() 
    console.log(url,method,time)   
    next()
}

app.use( [logger,express.static(path.resolve(__dirname, 'public'))] ) //passing multiple middlewares to app.use
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(5000,()=>{
    console.log("server listening on port 5000....")
})