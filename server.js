require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const userRoutes = require('./routes/userRoutes');

const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(loggerMiddleware);

app.use(express.json());

sequelize.authenticate()
    .then(() => console.log('Kết nối PostgreSQL thành công!'))
    .catch((err) => console.error('Không thể kết nối DB:', err));

sequelize.sync()
    .then(() => console.log('Đồng bộ hóa database thành công!'))
    .catch((err) => console.error('Lỗi kết nối database:', err));

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/users', userRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});
