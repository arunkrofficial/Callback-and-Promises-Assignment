// Double using callback

function doubleWithCallback(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleWithCallback(numbers, (num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
