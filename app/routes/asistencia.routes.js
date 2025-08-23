module.exports = app => {
    const asistencia = require("../controllers/asistencia.controller.js");
    var router = require("express").Router();
    router.post("/create/", asistencia.create);
    router.get("/", asistencia.findAll);
    router.get("/:id", asistencia.findOne);
    router.put("/update/:id", asistencia.update);
    router.delete("/delete/:id", asistencia.delete);
    app.use("/api/asistencia", router);
};