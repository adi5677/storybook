const express = require('express')

const router = express.Router()

const { 
    getAllStories,
    createStory, 
    getSingleStory, 
    updateStory, 
    deleteStory, 
    getCreateStory,
    getEditStory} = require('../controllers/stories')

router
    .route('/')
    .get(getAllStories)
    .post(createStory)

router.get('/add', getCreateStory)
router.get('/:id/delete', deleteStory)
router.get('/:id/edit', getEditStory)
router.post('/:id/edit', updateStory)

router 
    .route('/:id')
    .get(getSingleStory)
    .patch(updateStory)
    .delete(deleteStory)

module.exports = router