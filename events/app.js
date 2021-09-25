let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keyexpress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse está arriba');
    }
};

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'; //se agrega a la variable el objeto que contiene nombre
console.log(obj[myKey]);

myKey = 'keyexpress';  //se agrega a la variable el objeto que contiene keyexpress
console.log(obj[myKey]()); //se llama a keyexpress de esta manera porque es una función dentro el objeto
myKey = 'mouseOver';
console.log(obj[myKey]());


let myArray = [];

myArray.push(4); //se agrega el valor numerico 4 al array
myArray.push('una cadena'); //se agrega una cadena de texto al array
myArray.push(obj); //se agrega la variable obj y todos sus valores al array
myArray.push(function () {
    console.log("hola desde el array")
});                               // se agrega una función al array
console.log(myArray);

console.log(myArray[2].mouseOver); //se agrega la posicion del valor del array y después se llama lo que contiene el objeto
console.log(myArray[3]); //se llama la posición del valor de la funcion en el array para invocar


let funcArray = [];

funcArray.push ( () => {
    console.log("Function 1");
});

funcArray.push ( () => {
    console.log("Function 2");
});

funcArray.push ( () => {
    console.log("Function 3");
});

funcArray.forEach( (item) => {
    item();
});           //se llama una vez cada valor del array funcArray