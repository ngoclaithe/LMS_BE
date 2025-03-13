const DetailStudent = require('../models/DetailStudent');
const User = require('../models/User');

exports.createDetailStudent = async (req, res) => {
    console.log(req.body);
    const { id_student, code_student_by_university, gender, year_of_admission, class_student, training_program, university_year, avatar } = req.body;
    try {
        const user = await User.findOne({ where: { id_user: id_student } });
        
        if (!user || user.role !== 'student') {
            return res.status(400).json({ message: 'Người dùng không tồn tại hoặc không có vai trò student' });
        }
        
        const newDetailStudent = await DetailStudent.create({
            id_student,
            code_student_by_university,
            gender,
            year_of_admission,
            class_student,
            training_program,
            university_year,
            avatar
        });
        res.status(201).json({ message: 'Đã tạo thông tin chi tiết sinh viên thành công', detailStudent: newDetailStudent });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getDetailStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const detailStudent = await DetailStudent.findByPk(id);
        if (!detailStudent) {
            return res.status(404).json({ message: 'Không tìm thấy thông tin chi tiết sinh viên' });
        }
        res.status(200).json(detailStudent);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getDetailStudentById = async (req, res) => {
    const { id_student } = req.params;
    console.log("Gia tri id_student", id_student);
    try {
        const detailStudent = await DetailStudent.findOne({ where: { id_student } });
        if (!detailStudent) {
            return res.status(200).json({ message: 'noinfo' });
        }
        res.status(200).json(detailStudent);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.updateDetailStudent = async (req, res) => {
    const { id_student } = req.params;
    try {
        const updatedRows = await DetailStudent.update(req.body, { where: { id_student: id_student } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Không tìm thấy thông tin chi tiết sinh viên để cập nhật' });
        }
        res.status(200).json({ message: 'Cập nhật thông tin sinh viên thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.deleteDetailStudent = async (req, res) => {
    const { id_student } = req.params;
    try {
        const deletedRows = await DetailStudent.destroy({ where: { id_student: id_student } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Không tìm thấy thông tin chi tiết sinh viên để xoá' });
        }
        res.status(200).json({ message: 'Xoá thông tin sinh viên thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getAllDetailStudents = async (req, res) => {
    try {
        const students = await DetailStudent.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};
