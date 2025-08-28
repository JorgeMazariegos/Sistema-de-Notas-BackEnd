module.exports = app => {
    const administrador = require("../controllers/administrador.controller.js");
    var router = require("express").Router();
    router.post("/create/", administrador.create);
    router.get("/", administrador.findAll);
    router.get("/:id", administrador.findOne);
    router.put("/update/:id", administrador.update);
    router.delete("/delete/:id", administrador.delete);
    app.use("/api/administrador", router);
};