//find and map
// route params
const express = require('express')
const app = express()
const path = require('path')

const {userlist}  = require('./fakedata')

app.get('/allusers',(req,res,err)=>{
    if(err) console.log(err)
    const users = userlist.map((user)=>{
       return {id, nm,username,age, nationality, favMovId}  = user
    })
    res.json(users)
})

app.get('/user/1',(req,res)=>{
    
    const user1 = userlist.find((user)=> user.id==1 )
    console.log(user1)
    res.json(user1)
})

app.get('/user/:uid',(req,res)=>{
    console.log(req)
    console.log(req.params)
    const user = userlist.find((user)=> user.id==req.params.uid )
    if(!user) {
       return res.status(404).send('product not found')
    } 
    console.log(user1)
    res.json(user1)
})

app.listen(5000,(req,res)=>{
    console.log("server listening")
})