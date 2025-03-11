const User = require('../models/User');

exports.createUser = async (req, res) => {
    const { full_name, email, password, role } = req.body;

    if (req.user.role !== 'teacher') {
        return res.status(403).json({ message: 'Chỉ giáo viên mới có quyền tạo người dùng' });
    }

    try {
        const newUser = await User.create({ full_name, email, password, role });
        res.status(201).json({ message: 'Tạo người dùng thành công', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { full_name, email, password, role } = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

        await user.update({ full_name, email, password, role });
        res.status(200).json({ message: 'Cập nhật người dùng thành công', user });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    if (req.user.role !== 'teacher') {
        return res.status(403).json({ message: 'Chỉ giáo viên mới có quyền xóa người dùng' });
    }

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

        await user.destroy();
        res.status(200).json({ message: 'Xóa người dùng thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};
