const db = require('../models');
const Asignacion = db.asignaciones;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const asignacion = {
        id_estudiante: req.body.id_estudiante,
        id_seccion: req.body.id_seccion
    };

    Asignacion.create(asignacion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de la asignación."
            });
        });
};

exports.findAll = (req, res) => {
    const id_estudiante = req.query.id_estudiante;
    var condition = id_estudiante ? { id_estudiante: { [Op.iLike]: `%${id_estudiante}%` } } : null;

    Asignacion.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de asignaciones."
            });
        });
};

exports.findOne = (req, res) => {
    const id_asignacion = req.params.id;

    Asignacion.findByPk(id_asignacion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar la asignación con id=" + id_asignacion
            });
        });
};

exports.findBySeccion = (req, res) => {
    const id_seccion = req.params.id_seccion;

    Asignacion.findAll({ include: ['estudiante'], where: { id_seccion: id_seccion }, attributes:[] })
        .then(data => {
            const students = data.map(asignacion => asignacion.estudiante);
            res.send(students);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar la informacion de estudiantes en la seccion con id=" + id_seccion
            });
        });

};

exports.findAsignacionesBySeccion = (req, res) => {
    const id_seccion = req.params.id_seccion;

    Asignacion.findAll({ where: { id_seccion: id_seccion } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar la informacion de asignaciones en la seccion con id=" + id_seccion
            });
        });
};        

exports.update = (req, res) => {
    const id = req.params.id;

    Asignacion.update(req.body, {
        where: { id_asignacion: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La asignación "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la asignación con id=${id}. Tal vez el registro no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar la asignación con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Asignacion.destroy({
        where: { id_asignacion: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro de la asignación se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la asignación con id=${id}. El registro no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar la asignación con id=" + id
            });
        });
};