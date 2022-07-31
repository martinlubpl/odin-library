let myLibrary = [];

// for testing purposes
let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
let book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 400, false);
let book3 = new Book('asdf', 'qwer', 1500, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
//end

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(book) {
  myLibrary.unshift(book);
}

function displayBooks(arr) {
  for (let book of arr) {
    addCard(book);
  }
}

function addCard(book, position = undefined) {
  const main = document.querySelector('main');
  const card = document.createElement('div');



  const title = document.createElement('div');
  title.innerText = book.title;
  card.appendChild(title);
  const author = document.createElement('div');
  author.innerText = book.author;
  card.appendChild(author);
  const pages = document.createElement('div');
  pages.innerText = book.pages;
  card.appendChild(pages);

  // console.log(book.read);
  const read = document.createElement('div');
  const read_txt = (book.read) ? "Yes" : "No"
  read.innerText = "Read: " + read_txt;
  card.appendChild(read);

  const statusBtn = document.createElement('button');
  statusBtn.innerText = 'Change status';
  card.appendChild(statusBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete from library';
  card.appendChild(deleteBtn);


  // append whole card
  card.classList.add('card');
  if (position === undefined) {
    main.appendChild(card);
  } else {
    console.log(main.children[position]);
    main.insertBefore(card, main.children[position]);
  }
}
//add book button
const addBtn = document.querySelector('.add>button');
const form = document.querySelector('.new-book');
addBtn.addEventListener('click', () => {
  form.classList.remove('hidden');
})
// cancel
const cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', () => {
  form.classList.add('hidden');
})
// save
const saveBtn = document.querySelector('.save');
// const form = document.querySelector(".new-book>form");
const title = form.querySelector("#title");
const author = form.querySelector("#author");
const pages = form.querySelector("#pages");
const read = form.querySelector("#read");
saveBtn.addEventListener('click', () => {

  console.log(title, author, pages, read);

  let newBook = new Book(title.value, author.value, Number(pages.value), Boolean(read.checked));
  addBookToLibrary(newBook, 2);
  addCard(newBook, 1);
  clearForm();
})
function clearForm() {
  // const form = document.querySelector(".new-book>form");
  form.querySelector("#title").value = '';
  form.querySelector("#author").value = '';
  form.querySelector("#pages").value = '';
  form.querySelector("#read").checked = false;
  form.classList.add("hidden");
}

//init
displayBooks(myLibrary);