let myLibrary = [];

// for testing purposes
let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
let book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 400, false);
let book3 = new Book('asdf', 'qwer', 1500, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function Book(title, author, pages, comment, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(book) {
  myLibrary.unshift(book);
}

function displayBooks (arr) {
    
}






displayBooks()