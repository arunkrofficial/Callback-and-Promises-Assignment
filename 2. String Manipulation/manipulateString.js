function manipulateString(str) {
  const manipulatedString = str.toUpperCase();
  return function logString() {
    console.log(`The manipulated string is: ${manipulatedString}`);
  }
}

// Example usage:
const callbackFn = manipulateString("hello world");
callbackFn(); // Output: "The manipulated string is: HELLO WORLD"
