// Define an array of book objects
const books = [
  {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
  {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
  {title: "1984", author: "George Orwell", year: 1949},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925}
];
// Define a callback function to log the titles in alphabetical order
function callback(titles) {
  const sortedTitles = titles.sort();
  console.log(sortedTitles);
}
// Use map to create a new list of book titles
const titles = books.map(book => book.title);

// Call the callback function and pass in the list of titles
callback(titles);
