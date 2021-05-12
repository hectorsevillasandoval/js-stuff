const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld(); // log: Hello World

console.log(hello); // log: hello is not defined

var scope = 'I am global';

const functionScope = () => {
  var scope = 'I am just a local';
  const func = () => {
    return scope;
  };
};
