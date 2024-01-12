
// ~ DEPENDENCIES ~ //
require("dotenv").config()
const mongoose = require("mongoose")


// ~ GET .ENV VARIABLES ~ //
const {DATABASE_URL, SECRET, PORT} = process.env

// ~ DATABASE CONNECTION ~ //
mongoose.connect(DATABASE_URL)

// ~ CONNECTION EVENTS ~ //
mongoose.connection
.on("open",  () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

// ~ EXPORT THE CONNECTION ~ //
module.exports = mongoose
