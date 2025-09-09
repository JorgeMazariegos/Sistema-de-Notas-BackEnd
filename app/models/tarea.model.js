const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define("tarea", {
        id_tarea: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_seccion: {
            type: DataTypes.INTEGER,
            references:{
                model: 'secciones',
                key: 'id_seccion'
            }
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        fecha_asignacion: {
            type: DataTypes.DATE,    
        },
        fecha_entrega: {
            type: DataTypes.DATE,
        }
    },{
        tableName: 'tareas',
    });
    return Tarea;
};