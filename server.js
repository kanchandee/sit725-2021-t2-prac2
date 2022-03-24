var express = require("express")
var app = express()
var port = process.env.port || 3000
app.listen(port, () =>{
    console.log("app listensing : "+port)
})

const addingNumbers = (n1,n2)=>{
    return n1+n2
}

app.get('/addingNumbers', (req,res)=>{
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)

    res.send(addingNumbers(n1,n2).toString())
})