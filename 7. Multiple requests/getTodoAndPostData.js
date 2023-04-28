async function getTodoAndPostData() {
  try {
    // Make the requests to the two API endpoints
    const [todoResponse, postResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1")
    ]);

    // Parse the response data into JSON objects
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    // Combine the responses into an object with "todo" and "post" keys
    const combinedData = {
      todo: todoData,
      post: postData
    };

    // Log the combined data object to the console
    console.log(combinedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to retrieve and log the combined data
getTodoAndPostData();
