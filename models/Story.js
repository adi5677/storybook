const mongoose = require('mongoose')

const storySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please send a title"]
    },
    body: {
        type: String,
        required: [true, "Please send body"]
    },
    tags: {
        type: String,
        required: [true, "Please send tags"],
        default: "story"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Story', storySchema)