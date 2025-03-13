const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Document = sequelize.define('Document', {
    id_document: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_lesson: {
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
        allowNull: true,
    }
},{
    timestamps: true,
});

module.exports = Document;