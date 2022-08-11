let myLibrary = [];

//declaration moved to top
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// for testing purposes
let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
let book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 400, false);
let book3 = new Book('asdf', 'qwer', 1500, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
//end

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }




function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    addCard(arr[i], i)
  }

  // for (let book of arr) {
  //   addCard(book);
  // }
}

function addCard(book, datasetid) {
  const main = document.querySelector('main');
  const card = document.createElement('div');



  const title = document.createElement('div');
  title.innerText = book.title;
  card.appendChild(title);
  const author = document.createElement('div');
  author.innerText = book.author;
  card.appendChild(author);
  const pages = document.createElement('div');
  pages.innerText = book.pages + " pages";
  card.appendChild(pages);


  const read = document.createElement('div');
  const read_txt = (book.read) ? "Yes" : "No"
  read.innerText = "Read: " + read_txt;
  card.appendChild(read);
  //change status of book
  const statusBtn = document.createElement('button');
  statusBtn.innerText = 'Change status';
  statusBtn.dataset.id = datasetid;
  statusBtn.classList.add('status-btn');
  statusBtn.addEventListener('click', function () {
    book.read = !book.read;
    // console.log(myLibrary);
    read.innerText = "Read: " + ((book.read) ? "Yes" : "No");
  })

  card.appendChild(statusBtn);
  // delete
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete from library';
  deleteBtn.dataset.id = datasetid;
  deleteBtn.addEventListener('click', (e) => {
    const targetId = e.target.dataset.id;
    // remove from array
    myLibrary.splice(targetId,1);
    //remove card
    const toRemove = document.querySelector(`[data-id="${targetId}"]`);
    toRemove.remove();

    //change data attributes to match index in myLibrary
    const cards = document.querySelectorAll('.card');
    for (let i = 1; i < cards.length; i++) {
      console.log(cards[i]);
      cards[i].dataset.id = i-1;
      
      const statBtn = cards[i].querySelector('.status-btn');
      statBtn.dataset.id = i-1;
      
      const delBtn = cards[i].querySelector('button:last-child');
      delBtn.dataset.id = i-1;
      
      
    }
    
    

  })
  
  card.appendChild(deleteBtn);


  // append whole card
  card.classList.add('card');
  card.dataset.id = datasetid;
  main.appendChild(card);
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



  let newBook = new Book(title.value, author.value, Number(pages.value), Boolean(read.checked));
  addBookToLibrary(newBook, 2);
  addCard(newBook, myLibrary.length - 1);
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