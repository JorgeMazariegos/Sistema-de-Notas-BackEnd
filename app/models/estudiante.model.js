const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define("estudiante", {
        id_estudiante:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        apellido: {
           type: DataTypes.STRING(100),
        },
        email: {
           type: DataTypes.STRING(100),
           allowNull: false
        },
        carnet: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        
        telefono: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    });
    return Estudiante;
};