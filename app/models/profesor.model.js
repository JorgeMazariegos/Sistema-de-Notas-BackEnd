const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Profesor = sequelize.define("profesor", {
        id_profesor:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING(100),
        },
        email:{
            type: DataTypes.STRING(100)
        },
        especialidad:{
            type: DataTypes.STRING(20)
        },
    });
    return Profesor;
};