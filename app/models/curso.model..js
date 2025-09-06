const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("curso", {
        id_curso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        codigo: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        semestre: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    });
    return Curso;
};