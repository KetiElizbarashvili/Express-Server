const express = require('express')
const app = express()
const port = 3000
const usersRouter = require('./users/users')



app.use(express.json())
app.use('/users',usersRouter)


app.listen(port,()=>{
    console.log("Application lints on",port)
})