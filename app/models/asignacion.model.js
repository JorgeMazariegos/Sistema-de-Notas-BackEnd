const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Asignacion = sequelize.define('asignacion', {
        id_asignacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_estudiante: {
            type: DataTypes.INTEGER,
            references:{
                model: 'estudiantes',
                key: 'id_estudiante'
            }
        },
        id_seccion: {
            type: DataTypes.INTEGER,
            references:{
                model: 'secciones',
                key: 'id_seccion'
            }
        }
    }, {
        tableName: 'asignaciones',
    });
    return Asignacion;
}