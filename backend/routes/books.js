const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const convertAndSaveToWebP = require('../middleware/multer-config')
const booksControllers = require('../controllers/books')

//Route POST
router.post('/', auth, convertAndSaveToWebP, booksControllers.createBook)
router.post('/:id/rating', auth, booksControllers.addRatingBook)
//Routes GET
router.get('/', booksControllers.getAllBooks)

router.get('/bestrating', booksControllers.getThreeBestBooks)

router.get('/:id', booksControllers.getOneBook)

//Route PUT
router.put('/:id', auth, convertAndSaveToWebP, booksControllers.modifyBook)

//Route DELETE
router.delete('/:id', auth, booksControllers.deleteBook)

module.exports = router
