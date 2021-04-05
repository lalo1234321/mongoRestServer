const {Router} = require('express');
const router = Router();

const Perro = require('../models/perro.js');

router.post('/registrarMascota', async(req,res) => {
    let {nickName, owner} = req.body
    try{
        let mascota = new Perro({
            nickName,
            owner
        });
        await mascota.save();
        res.status(200).json({
            msg:'Mascota registrada',
            mascota
        });

    } catch (err) {
        res.status(500).json({
            msg: 'hable con el administrador'
        });
    }
    //midlewares
});


module.exports = router;