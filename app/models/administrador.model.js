const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Administrador = sequelize.define("administrador", {
        id_administrador:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
           type: DataTypes.STRING(100),
           allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },{
        tableName: 'administradores',
    });
    return Administrador;
};