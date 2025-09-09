module.exports = app => {
    const tarea = require("../controllers/tarea.controller.js");
    var router = require("express").Router();
    router.post("/create/", tarea.create);
    router.get("/", tarea.findAll);
    router.get("/all-by-section/:id_seccion", tarea.findAllBySection);
    router.get("/:id", tarea.findOne);
    router.put("/update/:id", tarea.update);
    router.delete("/delete/:id", tarea.delete);
    app.use("/api/tarea", router);
};
