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
const Vehiculo = require("./vehicle.model.js")(sequelize, Sequelize);
const Alquiler = require("./alquiler.model.js")(sequelize, Sequelize);

db.profesor =  Profesor
db.vehiculos =  Vehiculo
db.alquiler =  Alquiler

//Colocar relaciones

Vehiculo.hasMany(Alquiler, {foreignKey:'id_vehiculo'});
Alquiler.belongsTo(Vehiculo, {foreignKey:'id_vehiculo'});


module.exports = db;