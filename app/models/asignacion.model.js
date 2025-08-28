const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Asignacion = sequelize.define('asignacion', {
    id_asignacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_estudiante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'asignaciones',
});

module.exports = Asignacion;