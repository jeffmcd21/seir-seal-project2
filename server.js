
// ~ DEPENDENCIES ~ //
require("dotenv").config()
const express = require("express")
const registerGlobalMiddleware = require("./utils/middleware")
    // const apiKey = process.env.API_KEY;

// ~ APP OBJECT ~ //
const app = express()


// ~ REGISTER MIDDLEWARE ~ //
registerGlobalMiddleware(app)


// ~ ROUTES ~ //
app.get("/", (req, res) => {
    // res.send("Live Action")
    res.render("index.ejs")
})


// ~ SERVER LISTENER ~ //
const PORT = process.env.PORT || 23456 // Why wasn't this needed prior to refactoring???
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})