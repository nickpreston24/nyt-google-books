const router = require('express').Router();
const controller = require('../../controllers/bookController');

/**
 * TODO: figure out if this is api/book (get or post)
 * 
 * 
 * /api/books (get) - Should return all saved books as JSON.

/api/books (post) - Will be used to save a new book to the database.
 */

router.route('/')
    .get(controller.findAll)
    .post(controller.create);

router.route("/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove);

module.exports = router;