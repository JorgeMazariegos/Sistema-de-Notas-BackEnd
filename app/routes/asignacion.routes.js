module.exports = app => {
    const asignacion = require("../controllers/asignacion.controller.js");
    var router = require("express").Router();
    router.post("/create/", asignacion.create);
    router.get("/", asignacion.findAll);
    router.get("/:id", asignacion.findOne);
    router.get("/students-by-section/:id_seccion", asignacion.findBySeccion);
    router.get("/asignaciones-by-seccion/:id_seccion", asignacion.findAsignacionesBySeccion);
    router.put("/update/:id", asignacion.update);
    router.delete("/delete/:id", asignacion.delete);
    app.use("/api/asignacion", router);
};