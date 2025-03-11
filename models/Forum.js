const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Forum = sequelize.define('Forum', {
    id_forum: {
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
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: true,
    createdAt: 'created_at',
});

nodule.exports = Forum;