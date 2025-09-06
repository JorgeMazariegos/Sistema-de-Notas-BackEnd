module.exports = app => {
    const seccion = require("../controllers/seccion.controller.js");
    var router = require("express").Router();
    router.post("/create/", seccion.create);
    router.get("/", seccion.findAll);
    router.get("/:id", seccion.findOne);
    router.put("/update/:id", seccion.update);
    router.delete("/delete/:id", seccion.delete);
    app.use("/api/seccion", router);
};