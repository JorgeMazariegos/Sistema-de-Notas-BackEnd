module.exports = app => {
    const curso = require("../controllers/cursos.controller.js");
    var router = require("express").Router();
    router.post("/create/", curso.create);
    router.get("/", curso.findAll);
    router.get("/:id", curso.findOne);
    router.put("/update/:id", curso.update);
    router.delete("/delete/:id", curso.delete);
    app.use("/api/cursos", router);
};
