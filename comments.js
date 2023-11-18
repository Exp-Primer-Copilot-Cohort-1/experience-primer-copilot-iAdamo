// Create web server application
// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes
router.get('/', authMiddleware, commentsController.index);
router.post('/', authMiddleware, commentsController.create);
router.get('/edit/:id', authMiddleware, commentsController.edit);
router.post('/edit/:id', authMiddleware, commentsController.update);
router.get('/delete/:id', authMiddleware, commentsController.delete);

module.exports = router;
