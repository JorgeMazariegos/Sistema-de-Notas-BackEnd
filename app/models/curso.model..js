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
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        semestre: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        id_profesor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'profesores',
                key: 'id_profesor'
            }
        }
    });
    return Curso;
};