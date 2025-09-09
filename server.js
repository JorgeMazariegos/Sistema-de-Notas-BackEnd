const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "UMG Aplicación WEB" });
});

require("./app/routes/profesor.routes")(app);
require("./app/routes/asistencia.routes")(app);
require("./app/routes/grado.routes")(app);
require("./app/routes/curso.routes")(app);
require("./app/routes/asignacion.routes")(app);
require("./app/routes/estudiante.routes")(app);
require("./app/routes/administrador.routes")(app);
require("./app/routes/seccion.routes")(app);
require("./app/routes/tarea.routes")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});