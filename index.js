// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log('Hello!');
}
sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  } 

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo('Isabel'); 
  sayHelloTo('Jane'); 

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }   
  say("Goodbye", "Julio");
  say("Julio", "hello"); 


  function add(x, y) {
    return x + y;
  } 
  console.log(add(1,2)); 

  function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
  } 

  function say(greeting, firstName) {
      console.log("Hi", "Faith");
      return `${greeting}, ${firstName}!`;
  }