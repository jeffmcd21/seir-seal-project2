
// DEPENDENCIES //
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

// GET .ENV VARIABLES //
const {DATABASE_URL, SECRET, PORT} =process.env

// DATABASE CONNECTION //
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

// CREATE APP OBJECT //
const app = express()


// ROUTES //
app.get("/", (req, res) => {
    res.send("It's Working")
})

// SERVER LISTENER //
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})