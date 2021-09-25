var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet'); //se invoca cada parte de la funcion que se esta llamando y en este caso es "greet"

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr); //se llama todo el contenido del objeto emtr
emtr.emit('jump'); //se llama el contenido de la función jump