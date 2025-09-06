const db = require("../models");
const Seccion = db.secciones;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const seccion = {
        letra_seccion: req.body.letra_seccion,
        id_curso: req.body.id_curso,
        id_profesor: req.body.id_profesor
    };

    Seccion.create(seccion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de la sección."
            });
        });
};

exports.findAll = (req, res) => {
    const letra_seccion = req.query.letra_seccion;
    var condition = letra_seccion ? { letra_seccion: { [Op.iLike]: `%${letra_seccion}%` } } : null;

    Seccion.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de secciones."
            });
        });
};

exports.findTeacherCourses = (req, res) => {
    const id_profesor = req.params.id_profesor;

    Seccion.findAll({ attributes: ['letra_seccion', 'id_curso'], where: { id_profesor: id_profesor } })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información."
            });
        });
};

exports.findOne = (req, res) => {
    const id_seccion = req.params.id;

    Seccion.findByPk(id_seccion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar la seccion con id=" + id_seccion
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Seccion.update(req.body, {
        where: { id_seccion: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La seccion "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la seccion con id=${id}. Tal vez el registro no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar la seccion con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Seccion.destroy({
        where: { id_seccion: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro de la seccion se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la seccion con id=${id}. El registro no fue encontado!`
                });
            }
        })
        .catch(err => {
            resb.status(500).send({
                message: "No se pudo eliminar la seccion con id=" + id
            });
        });
};