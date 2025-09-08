const db = require("../models");
const Grado = db.grados;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const grado = {
        nota: req.body.nota,
        tipoEvaluacion: req.body.tipoEvaluacion,
        id_asignacion: req.body.id_asignacion,
        fecha: req.body.fecha
    };

    Grado.create(grado)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de la nota."
            });
        });
};

exports.findAll = (req, res) => {
    const nota = req.query.nota;
    var condition = nota ? { nota: { [Op.iLike]: `%${nota}%` } } : null;

    Grado.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de notas."
            });
        });
};

exports.findOne = (req, res) => {
    const id_grado = req.params.id;

    Grado.findByPk(id_grado)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar la nota con id=" + id_grado
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Grado.update(req.body, {
        where: { id_grado: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La nota "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la nota con id=${id}. Tal vez la nota no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar la nota con id=" + id
            });
        });
};

exports.findByAsignacion = (req, res) => {
    const id_asignacion = req.params.id_asignacion;
    Grado.findAll({ where: { id_asignacion: id_asignacion } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de notas."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Grado.destroy({
        where: { id_grado: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro de la nota se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la nota con id=${id}. La nota no fue encontada!`
                });
            }
        })
        .catch(err => {
            resb.status(500).send({
                message: "No se pudo eliminar la nota con id=" + id
            });
        });
};