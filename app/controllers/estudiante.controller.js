const db = require("../models");
const Estudiante = db.estudiante;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    const estudiante = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        carnet: req.body.carnet,
        telefono: req.body.telefono,

    };

    Estudiante.create(estudiante)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de estudiante."
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Estudiante.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de estudiantes."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Estudiante.findByPk(id_estudiante)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar el estudiante con id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Estudiante.update(req.body, {
        where: { id_estudiante: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Estudiante "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el estudiante con id=${id}. Tal vez el estudiante no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar el estudiante con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Estudiante.destroy({
        where: { id_estudiante: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro del estudiante se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el estudiante con id=${id}. El estudiante no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el estudiante con id=" + id
            });
        });
};