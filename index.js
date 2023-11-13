const express = require("express")
require("dotenv").config()
const { handler } = require("./controller")
const app = express()
const PORT = 5012;

app.use(express.json())

app.get("*", async (req, res) => {
    res.send(await handler(req, "get"))
})


app.post("*", async (req, res) => {
    res.send(await handler(req, "post"))
})

app.listen(PORT, (err) => {
    if (err) return console.log(err)
    console.log(`App Running at Port http://localhost:${5012}`)
})


// for set host 
// https://api.telegram.org/bot6618382111:AAHJgqAQ-IwOQFxyy_h5e8Uesf82C-NZplQ/setWebhook?url=https://1f1d-103-71-16-137.ngrok-free.app/