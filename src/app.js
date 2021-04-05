require('./config/config.js');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const user = require('./routes/user.js');
const app = express();
const venta = require('./routes/venta.js');


app.set('port', process.env.PORT);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(user);
app.use(venta);

mongoose.connect(process.env.URI_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    (err)?console.log("error in the conection"):console.log("conection successfully with mongodb");
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${process.env.PORT}`);
})

module.exports = app;