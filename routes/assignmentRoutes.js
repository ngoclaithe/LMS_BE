const express = require('express');
const {
    createAssignment,
    getAllAssignments,
    getAssignmentById,
    updateAssignment,
    deleteAssignment
} = require('../controllers/assignmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllAssignments);
router.get('/:id', getAssignmentById);

// router.post('/', authMiddleware, createCourse);
router.post('/', createAssignment);
router.put('/:id', authMiddleware, updateAssignment);
router.delete('/:id', authMiddleware, deleteAssignment);

module.exports = router;
