const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    link: {
        type: String
    }
})

module.exports = mongoose.model("Task", TaskSchema)