import express from 'express'
const app = express()
app.use(express.json())
app.listen(3000)
const arr= [];
 app.post('/add',(req,res)=>{
    const {email} = req.body;
    arr.push(email)
 })

 app.get('/geth',(req,res)=>{
    res.send(arr)
 })
 app.delete('/delete',(req,res)=>{
   const id = req.params
   arr.splice(id,1)
   
 })
 s