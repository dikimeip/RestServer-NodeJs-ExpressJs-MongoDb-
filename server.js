const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Router = require('./Routes/UserRouter')
const mongoose = require('mongoose')

mongoose.connect('mongodb://toshiba-pc:27017/NodeMongo'
    , { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Terhubung"))
    .catch(e => console.log(e));

const listen = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/api', Router)
app.get('/',(req,res)=>{
    res.send("Ok Test")
})



app.listen(listen, () => console.log(`Route Berjalan Di ${listen}`))