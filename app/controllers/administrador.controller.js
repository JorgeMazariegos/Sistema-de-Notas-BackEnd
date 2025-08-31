const { PASSWORD } = require("../config/db.config");
const db = require("../models");
const Administrador = db.administradores;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    const administrador = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,

    };

    Administrador.create(administrador)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el registro de administrador."
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Administrador.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al buscar información de administradores."
            });
        });
};

exports.findOne = (req, res) => {
    const id_administrador = req.params.id;

    Administrador.findByPk(id_administrador)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al buscar el administrador con id=" + id_administrador
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Administrador.update(req.body, {
        where: { id_administrador: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Administrador "+ id + " se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el administrador con id=${id}. Tal vez el administrador no se encontró o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo actualizar el administrador con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Administrador.destroy({
        where: { id_administrador: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El registro del administrador se eliminó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el administrador con id=${id}. El administrador no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el administrador con id=" + id
            });
        });
};