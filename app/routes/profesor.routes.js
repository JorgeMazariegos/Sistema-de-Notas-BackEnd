module.exports = app => {
    const profesor = require("../controllers/profesor.controller.js");
    var router = require("express").Router();
    router.post("/create/", profesor.create);
    router.get("/", profesor.findAll);
    router.get("/:id", profesor.findOne);
    router.get("/login/:email", profesor.findbyEmail);
    router.put("/update/:id", profesor.update);
    router.delete("/delete/:id", profesor.delete); 
    app.use("/api/profesor", router);
};