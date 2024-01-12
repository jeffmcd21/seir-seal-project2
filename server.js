
// ~ DEPENDENCIES ~ //
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mountainController = require("./controllers/mountain")

// ~ APP OBJECT ~ //
const app = express()


// ~ MIDDLEWARE ~ //
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use("/mountains", mountainController)


// ~ ROUTES ~ //
app.get("/", (req, res) => {
    res.send("Live Action")
})


// ~ SERVER LISTENER ~ //
const PORT = process.env.PORT || 23456 // Why wasn't this needed prior to refactoring???
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})