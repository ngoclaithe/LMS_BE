const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', userController.createUser);

router.get('/', userController.getAllUsers);

router.get('/students', userController.getAllStudents);

router.get('/teachers', userController.getAllTeachers);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.delete('/:id_user', authMiddleware, userController.deleteUser);

module.exports = router;