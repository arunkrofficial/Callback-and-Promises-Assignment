function greetWithPromise(name) {
  return new Promise((resolve, reject) => {
    if (typeof name !== 'string') {
      reject(new Error('Name should be a string'));
    } else {
      resolve(`Hello, ${name}!`);
    }
  });
}
greetWithPromise('Arun Kumar')
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Output: Hello, Arun Kumar!
