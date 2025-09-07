const db = require("../models");
const Tarea = db.tareas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const tarea = {
        id_seccion: req.body.id_seccion,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha_asignacion: req.body.fecha_asignacion,
        fecha_entrega: req.body.fecha_entrega
    };

    Tarea.create(tarea)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de la tarea."
            });
        });
};

exports.findAll = (req, res) => {
    const id_seccion = req.query.id_seccion;
    var condition = id_seccion ? { id_seccion: { [Op.iLike]: `%${id_seccion}%` } } : null;

    Tarea.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de tareas."
            });
        });
};

exports.findAllBySection = (req, res) => {
    const id_seccion = req.params.id_seccion;
    Tarea.findAll({ where: { id_seccion: id_seccion } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de tareas."
            });
        });
};

exports.findOne = (req, res) => {
    const id_tarea = req.params.id;

    Tarea.findByPk(id_tarea)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar la tarea con id=" + id_tarea
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Tarea.update(req.body, {
        where: { id_tarea: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La tarea "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la tarea con id=${id}. Tal vez la tarea no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar la tarea con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Tarea.destroy({
        where: { id_tarea: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro de la tarea se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la tarea con id=${id}. La tarea no fue encontada!`
                });
            }
        })
        .catch(err => {
            resb.status(500).send({
                message: "No se pudo eliminar la tarea con id=" + id
            });
        });
};