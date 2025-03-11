const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DetailStudent = sequelize.define('DetailStudent', {
    id_detail_student: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_student: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    code_student_by_university: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,        
    },
    year_of_admission: {
        type: DataTypes.INTEGER,
        allowNull: true,         
    },
    class: {
        type: DataTypes.STRING,
        allowNull: true,            
    },
    training_program: {
        type: DataTypes.STRING,
        allowNull: true,           
    },
    university_year: {
        type: DataTypes.STRING,
        allowNull: true,  
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,          
    }
},{
    timestamps: true,
});

module.exports = DetailStudent;
