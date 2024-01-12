
// ~ DEPENDENCIES ~ //
const mongoose = require("./connection")


// ~ SCHEMA ~ //
const {Schema, model} = mongoose

const mountainsSchema = new Schema({
    rank: Number,
    mountainName: String,
    elevation: Number,
    hikeComplete: Boolean,
    img: String,
    dateComplete: Date,
    username: String
})

// ~ MODEL ~ //
const Mountain = model("Mountain", mountainsSchema) 


// ~ EXPORT MODEL ~ //
module.exports = Mountain