const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Library = sequelize.define('Library', {
    id_library: {
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
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    file_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uploaded_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    uploaded_at: {
        type: DataTypes.DATE,
        allowNull: true,
    }
},{
    timestamps: true,
});

module.exports = Library;