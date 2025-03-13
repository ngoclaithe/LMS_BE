const express = require('express');
const {
    createLesson,
    getAllLessons,
    getLessonById,
    updateLesson,
    deleteLesson
} = require('../controllers/lessonController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllLessons);
router.get('/:id', getLessonById);

// router.post('/', authMiddleware, createCourse);
router.post('/', createLesson);
router.put('/:id', updateLesson);
router.delete('/:id', deleteLesson);

module.exports = router;
