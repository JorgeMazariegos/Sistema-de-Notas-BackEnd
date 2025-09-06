const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("seccion", {
        id_seccion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        letra_seccion: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        id_curso: {
            type: DataTypes.INTEGER,
            references:{
                model: 'cursos',
                key: 'id_curso'
            }
        },
        id_profesor: {
            type: DataTypes.INTEGER,
            references:{
                model: 'profesores',
                key: 'id_profesor'
            }
        }
    },{
        tableName: 'secciones',
    });
    return Curso;
};