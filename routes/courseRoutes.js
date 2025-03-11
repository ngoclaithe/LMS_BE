const express = require('express');
const {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    get5CourseByCourseType,
    getAllCoursesByCourseType
} = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.get('/type/:course_type/limit5', get5CourseByCourseType);
router.get('/type/:course_type', getAllCoursesByCourseType);

router.get('/', getCourses);
router.get('/:id', getCourseById);

// router.post('/', authMiddleware, createCourse);
router.post('/', createCourse);
// router.put('/:id', authMiddleware, updateCourse);
router.put('/:id', updateCourse);
// router.delete('/:id', authMiddleware, deleteCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
