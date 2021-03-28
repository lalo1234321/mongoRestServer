const {Router} = require('express');
const router = Router();
const User = require('../models/user.js');

router.get('/user',(req,res) => {
    res.status(200).json({
        message: 'hola mundo'
    });
});

router.post('/createUser', (req,res) => {
    let {userName,password} = req.body;
    let user = new User({
        userName,
        password
    });
    user.save((err, userDB) => {
        if(err){
            return res.status(500).json({
                err
            });
        }
        res.status(200).json({
            message: 'Usuario guardado en la base de datos',
            userDB
        });
    })
});

router.put('/updateUser',(req, res) => {
    let {userName,password} = req.body;
    res.status(200).json({
        message:'modificación correcta',
        userName,
        password
    });
})


router.delete('/deleteUser',(req, res) => {
    let {userName,password} = req.body;
    res.status(200).json({
        message:'eliminación correcta',
        userName,
        password
    });
})



console.log('nada');

module.exports = router;