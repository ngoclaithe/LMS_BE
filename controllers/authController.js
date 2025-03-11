const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { full_name, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'Email đã tồn tại!' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ full_name, email, password: hashedPassword, role });

        res.status(201).json({ message: 'Đăng ký thành công!', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'Người dùng không tồn tại!' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Sai mật khẩu!' });

        const token = jwt.sign({ id: user.id_user, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Đăng nhập thành công!', token });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

exports.getMe = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Không có token hoặc token không hợp lệ' });
        }
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        console.log("Giá trị userId", userId);
        
        const user = await User.findOne({ where: { id_user: userId } });
        if (!user) return res.status(404).json({ message: 'Người dùng không tồn tại!' });

        res.status(200).json({
            user_id: user.id_user,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(401).json({ message: 'Token không hợp lệ hoặc hết hạn', error });
    }
};