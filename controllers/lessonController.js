const Lesson = require('../models/Lesson');

exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLessonById = async (req, res) => {
  try {
    const { id } = req.params;
    const lesson = await Lesson.findByPk(id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getLessonByIdCourse = async (req, res) => {
  try {
    const { id } = req.params; 
    const lessons = await Lesson.findAll({ where: { id_course: id } });
    if (!lessons || lessons.length === 0) {
      return res.status(404).json({ message: 'No lessons found for this course' });
    }
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLesson = async (req, res) => {
  try {
    const newLesson = await Lesson.create(req.body);
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const lesson = await Lesson.findByPk(id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    await lesson.update(req.body);
    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const lesson = await Lesson.findByPk(id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    await lesson.destroy();
    res.status(200).json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
