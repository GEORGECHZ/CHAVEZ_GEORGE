function greet(){
    console.log("Hello");
};
greet(); //invoke

//function ass parameters
function logGreeting(fn) {
    fn();
};
logGreeting(greet); 
//Estamos pasando la función greet como parámetro e invocandola con el nombre del argumento fn

//function expression
let GreetMe = function () {
    console.log("Hello from the functions expression");
};
GreetMe();

logGreeting(GreetMe);
//function are first class,pass it as a parameter