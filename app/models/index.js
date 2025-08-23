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

db.profesor =  Profesor
db.grados =  Grado
db.asistencias =  Asistencia

//Colocar relaciones

Asignacion.hasMany(Grado, {foreignKey:'id_asignacion'});
Grado.belongsTo(Asignacion, {foreignKey:'id_asignacion'});

Asignacion.hasMany(Asistencia, {foreignKey: 'id_asignacion'});
Asistencia.belongsTo(Asignacion, {foreignKey: 'id_asignacion'});


module.exports = db;