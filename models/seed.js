
// ~ DEPENDENCIES ~ //
const mongoose = require("./connection")
const Mountain = require("./Mountain")


// ~ SEED ROUTE ~ //
mongoose.connection.on("open", async () => {
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
    const data = await Mountain.create(startMountains)

    console.log("--- MOUNTAINS CREATED ---")
    console.log(data)
    console.log("--- MOUNTAINS CREATED ---")
    
    mongoose.connection.close()
    } catch (error) {
        console.log("---", error.message, "---")
    }
})