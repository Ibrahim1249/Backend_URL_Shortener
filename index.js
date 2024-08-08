const express = require("express");
const {connectToDB} = require("./connection")
const urlRoute = require("./Routers/url")
const viewRoute = require("./Routers/static")
const path = require("path")
const app = express();
const PORT = 8000

// mongodb connection
connectToDB("mongodb://127.0.0.1:27017/url-shortener").then(()=>{console.log("database is connected")})

// middleware

app.use(express.json());
app.use(express.urlencoded({extended : false})) // form data

app.set("view engine","ejs");
app.set("views",path.resolve("./Views"))

// router
app.use("/url",urlRoute)
app.get("/",viewRoute)



app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`)
})