const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },  
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Cargar Modelos

const Profesor = require("./profesor.model.js")(sequelize, Sequelize);
const Grado = require("./grado.model.js")(sequelize, Sequelize);
const Asistencia = require("./asistencia.model.js")(sequelize, Sequelize);
const Curso = require("./curso.model..js")(sequelize, Sequelize);
const Asignacion = require("./asignacion.model.js")(sequelize, Sequelize);
const Estudiante = require("./estudiante.model.js")(sequelize, Sequelize);
const Administrador = require("./administrador.model.js")(sequelize, Sequelize);

db.profesores =  Profesor
db.grados =  Grado
db.estudiante = Estudiante
db.asistencias =  Asistencia
db.cursos = Curso
db.asignaciones = Asignacion
db.administradores = Administrador

//Colocar relaciones

// Relacion entre asignacion y grado (asignacion -> muchos grados)
Asignacion.hasMany(Grado, {foreignKey:'id_asignacion'});
Grado.belongsTo(Asignacion, {foreignKey:'id_asignacion'});

// Relacion entre profesor y curso (profesor -> muchos cursos)
Profesor.hasMany(Curso, {foreignKey: 'id_profesor'});
Curso.belongsTo(Profesor, {foreignKey: 'id_profesor'});

// Relacion entre estudiante y asignacion (estudiante -> muchas asignaciones)
Estudiante.hasMany(Asignacion, {foreignKey: 'id_estudiante'});
Asignacion.belongsTo(Estudiante, {foreignKey: 'id_estudiante'});

// Relacion entre curso y asignacion (curso -> muchas asignaciones)
Curso.hasMany(Asignacion, {foreignKey: 'id_curso'});
Asignacion.belongsTo(Curso, {foreignKey: 'id_curso'});

// Relacion entre asignacion y asistencia (asignacion -> muchas asistencias)
Asignacion.hasMany(Asistencia, {foreignKey: 'id_asignacion'});
Asistencia.belongsTo(Asignacion, {foreignKey: 'id_asignacion'});

// Relacion entre profesor y curso (profesor -> muchos cursos)
Profesor.hasMany(Curso, {foreignKey: 'id_profesor'});
Curso.belongsTo(Profesor, {foreignKey: 'id_profesor'});

module.exports = db;