const express = require('express');
const {
    createDetailStudent,
    getAllDetailStudents,
    getDetailStudentById,
    updateDetailStudent,
    deleteDetailStudent
} = require('../controllers/detailstudentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllDetailStudents);
router.get('/:id_student', getDetailStudentById);

router.post('/', authMiddleware, createDetailStudent);
// router.post('/', createDetailStudent);
router.put('/:id_student', authMiddleware, updateDetailStudent);
router.delete('/:id_student', authMiddleware, deleteDetailStudent);

module.exports = router;
