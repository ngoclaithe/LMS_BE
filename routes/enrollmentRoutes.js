const express = require('express');
const {
    createEnrollment,
    getEnrollments,
    getEnrollmentById,
    updateEnrollment,
    deleteEnrollment
} = require('../controllers/enrollmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getEnrollments);
router.get('/:id', getEnrollmentById);

// router.post('/', authMiddleware, createCourse);
router.post('/', createEnrollment);
router.put('/:id', authMiddleware, updateEnrollment);
router.delete('/:id', authMiddleware, deleteEnrollment);

module.exports = router;
