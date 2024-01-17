
// ~ DEPENDENCIES ~ //
const express = require("express")
const Mountain = require("../models/Mountain")


// ~ ROUTER ~ //
const router = express.Router()


// ~ MIDDLEWARE ~ //
router.use((req, res, next) => {
    console.table(req.session)
    if(req.session.loggedIn) {
        next();
    } else {
    res.redirect("/user/login")
    }
}); // This middleware block is what is blocking the user from seeing the entire mountain list.


// ~ ROUTES ~ //
// -- SEED -- //
router.get("/seed", async (req, res) => {
    try {
        const startMountains = [
            { rank: 1,	mountainName: "Marcy", elevation: 5344, hikeComplete: false, img: "" },
            { rank: 2,	mountainName: "Algonquin", elevation: 5114, hikeComplete: false, img: "" },
            { rank: 3,	mountainName: "Haystack", elevation: 4960, hikeComplete: false, img: "" },
            { rank: 4,	mountainName: "Skylight", elevation: 4926, hikeComplete: false, img: "" },
            { rank: 5,	mountainName: "Whiteface", elevation: 4867, hikeComplete: false, img: "" },
            { rank: 6,	mountainName: "Dix", elevation: 4857, hikeComplete: false, img: "" },
            { rank: 7,	mountainName: "Gray", elevation: 4840, hikeComplete: false, img: "" },
            { rank: 8,	mountainName: "Iroquois Peak", elevation: 4840, hikeComplete: false, img: "" },
            { rank: 9,	mountainName: "Basin", elevation: 4827, hikeComplete: false, img: "" },
            { rank: 10,	mountainName: "Gothics", elevation: 4736, hikeComplete: false, img: "" },
            { rank: 11,	mountainName: "Colden", elevation: 4714, hikeComplete: false, img: "" },
            { rank: 12,	mountainName: "Giant", elevation: 4627, hikeComplete: false, img: "" },
            { rank: 13,	mountainName: "Nippletop", elevation: 4620, hikeComplete: false, img: "" },
            { rank: 14,	mountainName: "Santanoni", elevation: 4607, hikeComplete: false, img: "" },
            { rank: 15,	mountainName: "Redfield", elevation: 4606, hikeComplete: false, img: "" },
            { rank: 16,	mountainName: "Wright Peak", elevation: 4580, hikeComplete: false, img: "" },
            { rank: 17,	mountainName: "Saddleback", elevation: 4515, hikeComplete: false, img: "" },
            { rank: 18,	mountainName: "Panther", elevation: 4442, hikeComplete: false, img: "" },
            { rank: 19,	mountainName: "TableTop", elevation: 4427, hikeComplete: false, img: "" },
            { rank: 20,	mountainName: "Rocky Peak", elevation: 4420, hikeComplete: false, img: "" },
            { rank: 21,	mountainName: "Macomb", elevation: 4405, hikeComplete: false, img: "" },
            { rank: 22,	mountainName: "Armstrong", elevation: 4400, hikeComplete: false, img: "" },
            { rank: 23,	mountainName: "Hough", elevation: 4400, hikeComplete: false, img: "" },
            { rank: 24,	mountainName: "Seward", elevation: 4361, hikeComplete: false, img: "" },
            { rank: 25,	mountainName: "Marshall", elevation: 4360, hikeComplete: false, img: "" },
            { rank: 26,	mountainName: "Allen", elevation: 4340, hikeComplete: false, img: "" },
            { rank: 27,	mountainName: "Big Slide", elevation: 4240, hikeComplete: false, img: "" },
            { rank: 28,	mountainName: "Esther", elevation: 4240, hikeComplete: false, img: "" },
            { rank: 29,	mountainName: "Upper Wolf Jaw", elevation: 4185, hikeComplete: false, img: "" },
            { rank: 30,	mountainName: "Lower Wolf Jaw", elevation: 4175, hikeComplete: false, img: "" },
            { rank: 31,	mountainName: "Street", elevation: 4166, hikeComplete: false, img: "" },
            { rank: 32,	mountainName: "Phelps", elevation: 4161, hikeComplete: false, img: "" },
            { rank: 33,	mountainName: "Donaldson", elevation: 4140, hikeComplete: false, img: "" },
            { rank: 34,	mountainName: "Seymour", elevation: 4120, hikeComplete: false, img: "" },
            { rank: 35,	mountainName: "Sawteeth", elevation: 4100, hikeComplete: false, img: "" },
            { rank: 36,	mountainName: "Cascade", elevation: 4098, hikeComplete: false, img: "" },
            { rank: 37,	mountainName: "South Dix", elevation: 4060, hikeComplete: false, img: "" },
            { rank: 38,	mountainName: "Porter", elevation: 4059, hikeComplete: false, img: "" },
            { rank: 39,	mountainName: "Colvin", elevation: 4057, hikeComplete: false, img: "" },
            { rank: 40,	mountainName: "Emmons", elevation: 4040, hikeComplete: false, img: "" },
            { rank: 41,	mountainName: "Dial", elevation: 4020, hikeComplete: false, img: "" },
            { rank: 42,	mountainName: "Grace Peak", elevation: 4012, hikeComplete: false, img: "" },
            { rank: 43,	mountainName: "Blake Peak", elevation: 3960, hikeComplete: false, img: "" },
            { rank: 44,	mountainName: "Cliff", elevation: 3960, hikeComplete: false, img: "" },
            { rank: 45,	mountainName: "Nye", elevation: 3895, hikeComplete: false, img: "" },
            { rank: 46,	mountainName: "Couchsachraga", elevation: 3820, hikeComplete: false, img: "" },
            { rank: 47,	mountainName: "MacNaughton*", elevation: 4000, hikeComplete: false, img: "" },
        ]
    await Mountain.deleteMany({})
    const mountains = await Mountain.create(startMountains)
    res.json(mountains)
    } catch(error) {
        console.log(error.message)
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped check that log")
    }
})
// -- INDEX -- //
router.get("/", async (req, res) => {
    try {
        const username = req.session.username
        const mountains = await Mountain.find({})
        const mountainsHiked = await Mountain.find({ username })
        // console.log(mountainsHiked, mountains)
        res.render("mountains/index.ejs", { mountains, mountainsHiked })
    } catch(error) {
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped on a log, watch out")
    }
})

// -- NEW -- //
router.get("/new", (req, res) => {
    res.render("mountains/new.ejs")
})

// -- DELETE -- //
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        await Mountain.findByIdAndDelete(id)
        res.redirect("/mountains")
    } catch(error) {
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped on a log, check it out")
    }
})

// -- UPDATE -- //
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        req.body.hikeComplete = req.body.hikeComplete === "on" ? true : false
        req.body.username = req.session.username 
        await Mountain.findByIdAndUpdate(id, req.body, { new: true })
        console.log(req.body)
        res.redirect("/mountains")
        // (`/mountains/${id}`)
    } catch(error) {
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped on a log, check it out")
    }
})

// -- CREATE -- //
router.post("/", async (req, res) => {
    try {
        req.body.hikeComplete = req.body.hikeComplete === "on" ? true : false
        req.body.username = req.session.username // Add this once username is setup
        await Mountain.create(req.body)
        res.redirect("/mountains")
    } catch(error) {
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped on a log, check it out")
    }
})

// -- EDIT -- //
router.get("/:id/edit", async (req, res) => {
    try {
        const id = req.params.id
        const mountain = await Mountain.findById(id)
        res.render("mountains/edit.ejs", { mountain })
        console.log(id)
    } catch(error) {
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped on a log, check it out")
    }
})

// -- SHOW -- //
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const mountain = await Mountain.findById(id);
        res.render("mountains/show.ejs", { mountain })
    } catch(error) {
        console.log("---***---", error.message, "---***---")
        res.status(400).send("You tripped on a log, check it out")
    }
})


// ~ EXPORT ROUTER ~ //
module.exports = router
