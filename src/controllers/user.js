const { response, request } = require('express');
const User = require('../models/user.js');
const eliminarUsuario = (req = request, res = response) => {
    let { id } = req.body;
    User.findByIdAndUpdate(id,{status:false}, (err,userEliminado) => {
        if(err) {
            res.status(400).json({
                err
            });
        }
        res.status(200).json({
            userEliminado
        });
    });
};

module.exports = {
    eliminarUsuario
}