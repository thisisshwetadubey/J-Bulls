const mongoose = require("mongoose")

const sportsSchema = new mongoose.Schema({
    sportId: {
        type: String,
        trim: true,
        required: true
    },
    sportName: {
        type: String,
        trim: true,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    sportCovers: [{
        type: String,
        required: true
    }],
})

module.exports = new mongoose.model("Sports",sportsSchema )