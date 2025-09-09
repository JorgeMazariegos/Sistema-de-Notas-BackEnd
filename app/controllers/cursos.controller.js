const db = require("../models");
const Curso = db.cursos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const curso = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        semestre: req.body.semestre,
    };

    Curso.create(curso)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el curso."
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Curso.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al buscar los cursos."
            });
        });
};

exports.findOne = (req, res) => {
    const id_curso = req.params.id;

    Curso.findByPk(id_curso)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el curso con id=${id_curso}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar el curso con id=" + id_curso
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Curso.update(req.body, {
        where: { id_curso: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El curso " + id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el curso con id=${id}. Tal vez no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar el curso con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Curso.destroy({
        where: { id_curso: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El curso se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el curso con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el curso con id=" + id
            });
        });
};