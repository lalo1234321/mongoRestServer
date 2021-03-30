const {Router} = require('express');
const router = Router();
const User = require('../models/user.js');
const mongo = require('mongoose');
require('../config/config.js');

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
// Este endpoint lo realizó  abraham
router.get('/getUser', (req, res) => 
{
    let arr=[];
    mongo.connect(process.env.URI_DB, (err, db) =>{
        if(!err)
        {
            const cursor = db.collection('users').find({status: true},{status:0});
            cursor.forEach((doc, err)=>
            {
                if(!err)
                {
                    arr.push(doc);
                }
            },() => 
            {
            //    db.close();
               res.status(200).json({
                   resultado: arr
               });
            });
        }
    });
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

// este endpoint lo realizó lalo
router.get('/getUsers', async(req,res) => {
    const user = await User.find({status: true},{
        status: 0,
        password:0
    });
    res.status(200).json({
        result: user
    });
});

router.post('/usuarioeliminar',(req,res) => {
    let {userName,password} = req.body;
    res.status(200).json
        userName;
        password;
        User.find({status: false});
})

console.log('nada');

module.exports = router;