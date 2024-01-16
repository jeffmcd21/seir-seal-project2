
// ~ DEPENDENCIES ~ //
const mongoose = require("./connection")


// ~ DEFINE USER MODEL ~ //
const {Schema, model} = mongoose

const userSchema = new Schema({
    id:       {type: String, required: true, unique: true},
    name:     {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})


// ~ USER MODEL ~ //
const User = model("User", userSchema)


// ~ EXPORT MODEL ~ //
module.exports = User