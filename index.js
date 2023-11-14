const express = require("express")
require("dotenv").config()
const { handler } = require("./controller")
const path = require("path")
const u = require("util")
const fs = require("fs")
const app = express()
const PORT = 5012;

app.use(express.json())

app.get("/", async (req, res) => {
    // this is only for website to show side is working 
    res.send("you telegram bot is working.....")
})



app.post("/", async (req, res) => {
    // all the things handle by this function 
    await handler(req, "post")

    // if every thing is ok send 200 status code
    res.sendStatus(200);
})

// get file name from path 
app.get("/images/:filename", async (req, res) => {
    let filePath = path.join(__dirname,"/images",req.params.filename)
    res.sendFile(filePath)
})

app.listen(PORT, (err) => {
    if (err) return console.log(err)
    console.log(`App Running at Port http://localhost:${5012}`)
})