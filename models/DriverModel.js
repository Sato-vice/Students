const mongoose = require("mongoose")

const DriverSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
})

module.exports = mongoose.model("Driver", DriverSchema)