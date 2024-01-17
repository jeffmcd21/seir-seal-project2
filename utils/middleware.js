
// ~ DEPENDENCIES ~ //
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mountainController = require("../controllers/mountain")
const userController = require("../controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")



function registerGlobalMiddleware(app) {

    // ~ MIDDLEWARE ~ //
    app.use(morgan("dev"))
    app.use(methodOverride("_method"))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static("public"))
    app.use(session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
        saveUninitialized: true,
        resave: false
    }))


    // ROUTES  MIDDLEWARE//
    app.use("/mountains", mountainController)
    app.use("/user", userController)

}


module.exports = registerGlobalMiddleware

