const {Router} = require('express');
const router = Router();


router.get('/user',(req,res) => {
    res.status(200).json({
        message: 'hola mundo'
    });
});

module.exports = router;