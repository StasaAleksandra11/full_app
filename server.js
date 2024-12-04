const express = require('express')
const mongojs = require('mongojs')
const db = mongojs('aleksandradb', ['todos'])

const app = express()
app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.post('/save',(req,res)=>{
    let msg = req.body.msg
    db.todos.insertOne({msg:msg,date:new Date().toDateString()},(err, data) =>{
        res.send(msg)
    })
})

app.get('/get_data', (req, res)=>{
    db.todos.find((err, data) =>{
        res.send(data)
    })
})

app.listen(3000,() => {
    console.log('listening to port 3000')
})