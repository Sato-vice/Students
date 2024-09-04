const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Book", BookSchema)