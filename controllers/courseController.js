const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    const { course_name, description, start_date, end_date, price, avatar, user_create, course_type } = req.body;
    console.log(req.body);

    try {
        const newCourse = await Course.create({
            course_name,
            description,
            start_date,
            end_date,
            price,
            avatar,
            user_create,
            course_type
        });

        res.status(201).json({ message: 'Khóa học đã được tạo!', course: newCourse });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getCourseById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const course = await Course.findByPk(id);
        if (!course) return res.status(404).json({ message: 'Không tìm thấy khóa học!' });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const { course_name, description, start_date, end_date, price, avatar, course_type } = req.body;

    try {
        const course = await Course.findByPk(id);
        if (!course) return res.status(404).json({ message: 'Không tìm thấy khóa học!' });

        await course.update({
            course_name,
            description,
            start_date,
            end_date,
            price,
            avatar,
            course_type 
        });

        res.status(200).json({ message: 'Cập nhật khóa học thành công!', course });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    
    try {
        const course = await Course.findByPk(id);
        if (!course) return res.status(404).json({ message: 'Không tìm thấy khóa học!' });

        await course.destroy();
        res.status(200).json({ message: 'Xóa khóa học thành công!' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};
exports.get5CourseByCourseType = async (req, res) => {
    const { course_type } = req.params;
    
    try {
        const courses = await Course.findAll({
            where: { course_type },
            limit: 5,
            order: [['created_at', 'DESC']] 
        });
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getAllCoursesByCourseType = async (req, res) => {
    const { course_type } = req.params;
    
    try {
        const courses = await Course.findAll({
            where: { course_type },
            order: [['created_at', 'DESC']]
        });
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};