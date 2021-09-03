let greet = () => console.log("Hello");
greet();

let logGreeting = fn => fn();
logGreeting(greet);

let GreetMe = () => console.log("Hello from the functions expression");
GreetMe();

logGreeting(GreetMe);