var express = require('express'); //importamos la dependecia
var app = express(); //Declaramos una App de Express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

app.set('view engine', 'ejs');

app.use ('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) { 
    console.log('Request Url:' + req.url);
    next();
})

//primera ruta (está al nivel de la raíz /), Hello World!
app.get('/', function (req, res) {
    res.render("index");
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

//tercera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
});

app.listen(port); //levantar el server y ponerlo a escuchar