const Story = require('../models/Story')

exports.getAllStories = async (req, res) => {
    try {
        const stories = await Story.find()
        res.render('stories/index', {stories})
    } catch (error) {
        return res.render('error/500')
    }    
}

exports.getCreateStory = async (req, res) => {
    res.render('stories/add')
}

exports.createStory = async (req, res) => {
    console.log("create story hit")
    console.log(req.body)
    try {
        const story = await Story.create(req.body)
        res.redirect('/api/stories');
    } catch (error) {
        return res.render('error/500')
    }
}

exports.getSingleStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id)

        if(!story) {
            return res.render('error/404')
        }

        res.render('stories/show', {story})
    } catch (error) {
        return res.render('error/500')
    }
}


exports.updateStory = async (req, res) => {
    try {
        let story = await Story.findById(req.params.id)

        if(!story) {
            return res.render('error/404')
        }

        story = await Story.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.render('stories/show', {story})
    } catch (error) {
        return res.render('error/500')
    }
}

exports.getEditStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id)
        if(!story) {
            return res.render('error/404')
        }

        res.render('stories/edit', {story})
    } catch (error) {
        return res.render('error/500')
    }
}


exports.deleteStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id)

        if(!story) {
            return res.render('error/404')
        }

        // Deleting the Story with the id from the url
        await Story.findByIdAndDelete(req.params.id)

        res.redirect('/api/stories');
    } catch (error) {
        return res.render('error/500')
    }
}
