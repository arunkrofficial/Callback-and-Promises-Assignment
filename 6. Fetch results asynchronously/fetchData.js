// Define an async function called fetchData
async function fetchData() {
  try {
    // Use the fetch() function to send a GET request to the API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // Use the json() method to extract the JSON data from the response body
    const data = await response.json();
    
    // Log the parsed JSON data to the console
    console.log(data);
  } catch (error) {
    // If an error occurs, log it to the console
    console.error(error);
  }
}

// Call the fetchData() function to start the asynchronous operation
fetchData();
