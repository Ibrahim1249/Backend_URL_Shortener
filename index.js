const express = require("express");
const {connectToDB} = require("./connection")
const urlRouter = require("./Routers/url")
const app = express();
const PORT = 8000

// mongodb connection
connectToDB("mongodb://127.0.0.1:27017/url-shortener").then(()=>{console.log("database is connected")})

// middleware

app.use(express.json());


// router
app.use("/url",urlRouter)



app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`)
})