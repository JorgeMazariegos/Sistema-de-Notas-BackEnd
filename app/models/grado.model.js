const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Grado = sequelize.define("grado", {
        id_grado:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nota:{
            type: DataTypes.NUMERIC(3,2)
        },
        tipoEvaluacion:{
            type: DataTypes.STRING(30)
        },
        id_asignacion:{
            type: DataTypes.INTEGER,
            references:{
                model: 'asignaciones',
                key: 'id_asignacion'
            }
        },
        fecha:{
            type: DataTypes.DATE
        }
    });
    return Grado;
};