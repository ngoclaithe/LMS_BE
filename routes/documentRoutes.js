const express = require('express');
const {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument
} = require('../controllers/documentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllDocuments);
router.get('/:id', getDocumentById);

// router.post('/', authMiddleware, createCourse);
router.post('/', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);

module.exports = router;
