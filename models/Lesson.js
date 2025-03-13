const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Lesson = sequelize.define('Lesson', {
    id_lesson: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_course: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video_url: {
        type: DataTypes.STRING,
        allowNull: true,        
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: true,            
    }
}, {
    timestamps: true,
});

module.exports = Lesson;
