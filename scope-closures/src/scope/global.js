var hello = 'Hello';
//var hello = 'Hello +'; // Bad practice, you can redefine and reasign values when using var
let world = 'Hello World';
//let world = 'Hello'; // ERROR: world variable already assigned
const helloWorld = 'Hello World';

/**
 * If we create a variable without reserved words, It will have a global scope.
 */
const helloWorld = () => {
  globalVar = 'I am global';
};
helloWorld();
console.log(globalVar); // log: I am global.

const anotherFunction = () => {
  var localVar = (globalVar = 'Im Global');
};
anotherFunction();
console.log(globalVar); // log: Im Global.
