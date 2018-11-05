const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

//Configuración del servidor de HEROKU

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/servicios', (req, res) => {
    res.render('servicios');
});

app.listen(port, () => {
    console.log(`Escuchando deste el puerto ${port}`);
});