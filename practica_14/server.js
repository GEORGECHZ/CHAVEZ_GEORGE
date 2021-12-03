var express = require('express'); //importamos la dependecia
var app = express(); //Declaramos una App de Express
var PORT = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.use ('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html> <html lang="en" ><head><link rel="stylesheet" href=/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo</h1>
    <body> </html>`)
});

app.get('/person/:id', (req, res) => {
    res.render('person', {Name: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.get('/student', (req, res) => {
    res.render('index');
});

app.post('/student', (req, res) => {
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
});

app.listen(PORT);