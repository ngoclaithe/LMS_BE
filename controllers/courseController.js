const Course = require('../models/Course');
const { Op, fn, col, literal } = require('sequelize');

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

exports.getAllCoursesByCourseName = async (req, res) => {
    const { course_name } = req.params;
    
    if (!course_name || course_name.trim() === '') {
        return res.status(200).json([]);
    }
    
    try {
        const searchWords = course_name.trim().split(/\s+/);
        
        const whereConditions = [];
        
        whereConditions.push({
            course_name: { [Op.iLike]: `%${course_name}%` }
        });
        
        if (searchWords.length > 1) {
            const wordConditions = searchWords.map(word => ({
                course_name: { [Op.iLike]: `%${word}%` }
            }));
            whereConditions.push({ [Op.and]: wordConditions });
        }
        
        const courses = await Course.findAll({
            where: { [Op.or]: whereConditions },
            order: [
                [literal(`CASE WHEN "course_name" ILIKE '%${course_name}%' THEN 0 ELSE 1 END`), 'ASC'],
                [literal(`CASE WHEN "course_name" ILIKE '${course_name}%' THEN 0 ELSE 1 END`), 'ASC'],
                [literal(`ABS(LENGTH("course_name") - ${course_name.length})`), 'ASC'],
                ['created_at', 'DESC']
            ]
        });

        const enhancedCourses = courses.map(course => {
            const courseObj = course.toJSON();
            
            let score = 0;
            if (courseObj.course_name.toLowerCase().includes(course_name.toLowerCase())) score += 10;
            if (courseObj.course_name.toLowerCase().startsWith(course_name.toLowerCase())) score += 5;
            
            searchWords.forEach(word => {
                if (courseObj.course_name.toLowerCase().includes(word.toLowerCase())) score += 2;
            });
            
            courseObj.customScore = score;
            return courseObj;
        });
        
        enhancedCourses.forEach(course => {
            console.log(`Course Name: ${course.course_name}, Custom Score: ${course.customScore}`);
        });

        res.status(200).json(enhancedCourses);
    } catch (error) {
        console.error('Lỗi khi tìm khóa học:', error);
        res.status(500).json({ message: 'Lỗi server', error });
    }
};