const { where } = require('sequelize');
const Document = require('../models/Document');

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findByPk(id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getDocumentByIdLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findAll({where: {id_lesson: id}});
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createDocument = async (req, res) => {
  try {
    const newDocument = await Document.create(req.body);
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findByPk(id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    await document.update(req.body);
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findByPk(id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    await document.destroy();
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
