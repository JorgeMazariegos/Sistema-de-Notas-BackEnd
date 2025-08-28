const db = require("../models");
const Asistencia = db.asistencias;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const asistencia = {
        id_asignacion: req.body.id_asignacion,
        estatus: req.body.estatus,
        fecha: req.body.fecha
    };

    Asistencia.create(asistencia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de la asistencia."
            });
        });
};

exports.findAll = (req, res) => {
    const id_asignacion = req.query.id_asignacion;
    var condition = id_asignacion ? { id_asignacion: { [Op.iLike]: `%${id_asignacion}%` } } : null;

    Asistencia.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de asistencias."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Asistencia.findByPk(id_asistencia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar la asistencia con id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Asistencia.update(req.body, {
        where: { id_asistencia: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La asistencia "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la asistencia con id=${id}. Tal vez el registro no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar la asistencia con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Asistencia.destroy({
        where: { id_asistencia: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro de la asistencia se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la asistencia con id=${id}. El registro no fue encontado!`
                });
            }
        })
        .catch(err => {
            resb.status(500).send({
                message: "No se pudo eliminar la asistencia con id=" + id
            });
        });
};