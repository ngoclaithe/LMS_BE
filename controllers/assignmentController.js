const Assignment = require('../models/Assignment');

exports.createAssignment = async (req, res) => {
    const { id_course, title, description, deadline, status } = req.body;

    try {
        const newAssignment = await Assignment.create({
            id_course,
            title,
            description,
            deadline,
            status
        });
        res.status(201).json({ message: 'Tạo bài tập thành công', assignment: newAssignment });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.findAll();
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getAssignmentById = async (req, res) => {
    const { id } = req.params;

    try {
        const assignment = await Assignment.findByPk(id);
        if (!assignment) return res.status(404).json({ message: 'Không tìm thấy bài tập' });
        res.status(200).json(assignment);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.updateAssignment = async (req, res) => {
    const { id } = req.params;
    const { id_course, title, description, deadline, status } = req.body;

    try {
        const assignment = await Assignment.findByPk(id);
        if (!assignment) return res.status(404).json({ message: 'Không tìm thấy bài tập' });

        await assignment.update({ id_course, title, description, deadline, status });
        res.status(200).json({ message: 'Cập nhật bài tập thành công', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.deleteAssignment = async (req, res) => {
    const { id } = req.params;

    try {
        const assignment = await Assignment.findByPk(id);
        if (!assignment) return res.status(404).json({ message: 'Không tìm thấy bài tập' });

        await assignment.destroy();
        res.status(200).json({ message: 'Xóa bài tập thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};
