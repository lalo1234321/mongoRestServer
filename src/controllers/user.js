const {request, response} = require('express');
const User = require('../models/user.js');

const actualizar = async (req = request, res = response) => {
    let id = req.params.id;
    let body = req.body;
    try{
        
        let userDB = await User.findByIdAndUpdate(id, body, {new: true});
        res.status(200).json({
            message: 'Usuario modificado en la base de datos',
            userDB
        });
    } catch(err) {
        res.status(500).json({
            msg: 'problema en el servidor',
            err
        });
    }
}

module.exports = {
    actualizar
}