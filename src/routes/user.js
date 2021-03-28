const {Router} = require('express');
const router = Router();


router.get('/user',(req,res) => {
    res.status(200).json({
        message: 'hola mundo'
    });
});

router.post('/createUser', (req,res) => {
    let {userName,password} = req.body;
    res.status(200).json({
        userName,
        password
    });
});

module.exports = router;