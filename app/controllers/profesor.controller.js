const db = require("../models");
const Profesor = db.profesores;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.marca) {
        res.status(400).send({
            message: "Debe incluir nombre!"
        });
        return;
    }

    const profesor = {
        nombre: req.body.nombre,
        email: req.body.email,
        especialidad: req.body.especialidad,
    };

    Profesor.create(profesor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de profesor."
            });
        });
};

exports.findAll = (req, res) => {
    const marca = req.query.marca;
    var condition = marca ? { marca: { [Op.iLike]: `%${marca}%` } } : null;

    Profesor.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de profesores."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Profesor.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar el profesor con id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Profesor.update(req.body, {
        where: { id_vehiculo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Profesor "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el profesor con id=${id}. Tal vez el profesor no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar el profesor con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Profesor.destroy({
        where: { id_vehiculo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro del profesor se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el profesor con id=${id}. El profesor no fue encontado!`
                });
            }
        })
        .catch(err => {
            resb.status(500).send({
                message: "No se pudo eliminar el profesor con id=" + id
            });
        });
};