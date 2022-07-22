const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>hello world </h1>')
})

app.get('/greet',(req,res)=>{
    let person= 'Guest'
    if(req.query.person)
        person=req.query.person
    res.send('good morning'+ person)
})


app.get('/:city/:welcome',(req, res)=>{
    res.send(req.params.welcome +' to '+ req.params.city +'!')
})


app.post('/greet',(req,res)=>{
    let person= 'Guest'
    if(req.body.person)
        person=req.body.person
    res.send('Good Evening '+ person)
})


 app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/form.html')
 })

app.listen(4444, ()=>{
    console.log('server started on http://localhost:4444')
})
