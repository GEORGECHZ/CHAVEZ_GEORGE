//var Emitter = require('./emitter');
var Emitter = require('events'); //se crea un objeto events con los objetos greet y jump, y también se crea un contador de eventos u objetos

const config  = require('./config'); //se llaman los objetos desde config.js para agregarlos a events

var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet'); //se invoca cada parte de la funcion que se esta llamando y en este caso es "greet"

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr); //se llama todo el contenido del objeto emtr
emtr.emit('jump'); //se llama el contenido de la función jump
