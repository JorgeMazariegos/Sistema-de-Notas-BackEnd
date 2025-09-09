module.exports = app => {
    const grado = require("../controllers/grado.controller.js");
    var router = require("express").Router();
    router.post("/create/", grado.create);
    router.get("/", grado.findAll);
    router.get("/by-asignacion/:id_asignacion", grado.findByAsignacion);
    router.get("/:id", grado.findOne);
    router.put("/update/:id", grado.update);
    router.delete("/delete/:id", grado.delete);
    app.use("/api/grado", router);
};