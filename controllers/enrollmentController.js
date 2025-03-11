const Enrollment = require('../models/Enrollment');

exports.createEnrollment = async (req, res) => {
    const { id_user, id_course, enrolled_at } = req.body;
    
    try {
        const newEnrollment = await Enrollment.create({
            id_user,
            id_course,
            enrolled_at,
            status: "waiting"
        });
        res.status(201).json({ message: 'Đã gửi đăng ký khóa học thành công', enrollment: newEnrollment });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.findAll();
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

exports.getEnrollmentById = async (req, res) => {
    const { id } = req.params;

    try {
        const enrollment = await Enrollment.findByPk(id);
        if (!enrollment) return res.status(404).json({ message: "Không tìm thấy bản ghi đăng ký" });
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.updateEnrollment = async (req, res) => {
    const { id } = req.params;
    const { id_user, id_course, enrolled_at, status } = req.body;

    try {
        const enrollment = await Enrollment.findByPk(id);
        if (!enrollment) return res.status(404).json({ message: "Không tìm thấy bản ghi đăng ký" });

        await enrollment.update({ id_user, id_course, enrolled_at, status });

        res.status(200).json({ message: 'Cập nhật đăng ký thành công', enrollment });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.deleteEnrollment = async (req, res) => {
    const { id } = req.params;

    try {
        const enrollment = await Enrollment.findByPk(id);
        if (!enrollment) return res.status(404).json({ message: "Không tìm thấy bản ghi đăng ký" });

        await enrollment.destroy();
        res.status(200).json({ message: 'Xóa bản ghi đăng ký thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};
