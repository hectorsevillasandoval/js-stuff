const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whoops!');
    }
  });
};

const somethingWillHappenTwo = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('Whooops!');
      reject(error);
    }
  });
};

Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
  .then((response) => console.log('Array of results', response)) // Array of results [ 'Hey!', 'True' ]
  .catch((err) => console.error(err));
