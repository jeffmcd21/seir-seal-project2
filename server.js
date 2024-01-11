
// ~ DEPENDENCIES ~ //
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

// ~ GET .ENV VARIABLES ~ //
const {DATABASE_URL, SECRET, PORT} = process.env

// ~ DATABASE CONNECTION ~ //
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open",  () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

// ~ SCHEMA ~ //
const {Schema, model} = mongoose
const mountainSchema = new Schema({
    rank: Number,
    mountainName: String,
    elevation: Number,
    hikeCompleted: Boolean,
    img: String,
    // dateComplete: Date,
    // username: String
})

// ~ MODEL ~ //
const Mountain = model("Mountain", mountainSchema) 

// ~ APP OBJECT ~ //
const app = express()


// ~ MIDDLEWARE ~ //
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// ~ ROUTES ~ //
app.get("/", (req, res) => {
    res.send("Live Action")
})

// -- SEED -- //
app.get("/mountains/seed", async (req, res) => {
    try {
        const startMountains = [
            { rank: 1,	mountainName: "Marcy", elevation: 5344, hikeCompleted: false, img: "" },
            { rank: 2,	mountainName: "Algonquin", elevation: 5114, hikeCompleted: false, img: "" },
            { rank: 3,	mountainName: "Haystack", elevation: 4960, hikeCompleted: false, img: "" },
            { rank: 4,	mountainName: "Skylight", elevation: 4926, hikeCompleted: false, img: "" },
            { rank: 5,	mountainName: "Whiteface", elevation: 4867, hikeCompleted: false, img: "" },
            { rank: 6,	mountainName: "Dix", elevation: 4857, hikeCompleted: false, img: "" },
            { rank: 7,	mountainName: "Gray", elevation: 4840, hikeCompleted: false, img: "" },
            { rank: 8,	mountainName: "Iroquois Peak", elevation: 4840, hikeCompleted: false, img: "" },
            { rank: 9,	mountainName: "Basin", elevation: 4827, hikeCompleted: false, img: "" },
            { rank: 10,	mountainName: "Gothics", elevation: 4736, hikeCompleted: false, img: "" },
            { rank: 11,	mountainName: "Colden", elevation: 4714, hikeCompleted: false, img: "" },
            { rank: 12,	mountainName: "Giant", elevation: 4627, hikeCompleted: false, img: "" },
            { rank: 13,	mountainName: "Nippletop", elevation: 4620, hikeCompleted: false, img: "" },
            { rank: 14,	mountainName: "Santanoni", elevation: 4607, hikeCompleted: false, img: "" },
            { rank: 15,	mountainName: "Redfield", elevation: 4606, hikeCompleted: false, img: "" },
            { rank: 16,	mountainName: "Wright Peak", elevation: 4580, hikeCompleted: false, img: "" },
            { rank: 17,	mountainName: "Saddleback", elevation: 4515, hikeCompleted: false, img: "" },
            { rank: 18,	mountainName: "Panther", elevation: 4442, hikeCompleted: false, img: "" },
            { rank: 19,	mountainName: "TableTop", elevation: 4427, hikeCompleted: false, img: "" },
            { rank: 20,	mountainName: "Rocky Peak", elevation: 4420, hikeCompleted: false, img: "" },
            { rank: 21,	mountainName: "Macomb", elevation: 4405, hikeCompleted: false, img: "" },
            { rank: 22,	mountainName: "Armstrong", elevation: 4400, hikeCompleted: false, img: "" },
            { rank: 23,	mountainName: "Hough", elevation: 4400, hikeCompleted: false, img: "" },
            { rank: 24,	mountainName: "Seward", elevation: 4361, hikeCompleted: false, img: "" },
            { rank: 25,	mountainName: "Marshall", elevation: 4360, hikeCompleted: false, img: "" },
            { rank: 26,	mountainName: "Allen", elevation: 4340, hikeCompleted: false, img: "" },
            { rank: 27,	mountainName: "Big Slide", elevation: 4240, hikeCompleted: false, img: "" },
            { rank: 28,	mountainName: "Esther", elevation: 4240, hikeCompleted: false, img: "" },
            { rank: 29,	mountainName: "Upper Wolf Jaw", elevation: 4185, hikeCompleted: false, img: "" },
            { rank: 30,	mountainName: "Lower Wolf Jaw", elevation: 4175, hikeCompleted: false, img: "" },
            { rank: 31,	mountainName: "Street", elevation: 4166, hikeCompleted: false, img: "" },
            { rank: 32,	mountainName: "Phelps", elevation: 4161, hikeCompleted: false, img: "" },
            { rank: 33,	mountainName: "Donaldson", elevation: 4140, hikeCompleted: false, img: "" },
            { rank: 34,	mountainName: "Seymour", elevation: 4120, hikeCompleted: false, img: "" },
            { rank: 35,	mountainName: "Sawteeth", elevation: 4100, hikeCompleted: false, img: "" },
            { rank: 36,	mountainName: "Cascade", elevation: 4098, hikeCompleted: false, img: "" },
            { rank: 37,	mountainName: "South Dix", elevation: 4060, hikeCompleted: false, img: "" },
            { rank: 38,	mountainName: "Porter", elevation: 4059, hikeCompleted: false, img: "" },
            { rank: 39,	mountainName: "Colvin", elevation: 4057, hikeCompleted: false, img: "" },
            { rank: 40,	mountainName: "Emmons", elevation: 4040, hikeCompleted: false, img: "" },
            { rank: 41,	mountainName: "Dial", elevation: 4020, hikeCompleted: false, img: "" },
            { rank: 42,	mountainName: "Grace Peak", elevation: 4012, hikeCompleted: false, img: "" },
            { rank: 43,	mountainName: "Blake Peak", elevation: 3960, hikeCompleted: false, img: "" },
            { rank: 44,	mountainName: "Cliff", elevation: 3960, hikeCompleted: false, img: "" },
            { rank: 45,	mountainName: "Nye", elevation: 3895, hikeCompleted: false, img: "" },
            { rank: 46,	mountainName: "Couchsachraga", elevation: 3820, hikeCompleted: false, img: "" },
            { rank: 47,	mountainName: "MacNaughton*", elevation: 4000, hikeCompleted: false, img: "" },
        ]
    await Mountain.deleteMany({})
    const mountains = await Mountain.create(startMountains)
    res.json(mountains)
    } catch(error) {
        console.log(error.message)
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped check the log")
    }
})
// -- INDEX -- //
app.get("/mountains", async (req, res) => {
    try {
        // const username = req.session.username
        const mountains = await Mountain.find({}) // inject username here once auth is built
        res.render("mountains/index.ejs", { mountains })
    } catch(error) {
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped check the log")
    }
})

// -- NEW -- //

// -- DELETE -- //

// -- UPDATE -- //

// -- CREATE -- //

// -- EDIT -- //

// -- SHOW -- //




// ~ SERVER LISTENER ~ //
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})