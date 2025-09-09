const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Asistencia = sequelize.define("asistencia", {
        id_asistencia:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_asignacion:{
            type: DataTypes.INTEGER,
            references:{
                model: 'asignaciones',
                key: 'id_asignacion'
            }
        },
        estatus:{
            type: DataTypes.STRING(30)
        },   
        fecha:{
            type: DataTypes.DATE
        }
    },
    {
        tableName: 'asistencias',
    });
    return Asistencia;
};