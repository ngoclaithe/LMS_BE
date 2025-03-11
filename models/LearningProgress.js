const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LearningProgress = sequelize.define('LearningProgress', {
    id_learning_progress: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_course: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ompleted_lessons: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_lessons: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    last_accessed: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    timestamps: true,
});

module.exports = LearningProgress;