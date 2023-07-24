var BookmarkInput = document.getElementById("BookmarkInput");
var siteUrlInput = document.getElementById("siteUrl");

var booksContainer = [];

if (localStorage.getItem("Books") != null) {
  booksContainer = JSON.parse(localStorage.getItem("Books"));
  displayBooks(booksContainer);
  // localStorage.removeItem("Books");
}

function addBook() {
  var book = {
    bookNameValue: BookmarkInput.value,
    siteUrlValue: siteUrlInput.value,
  };

  var count = 0;
  for (var i = 0; i < booksContainer.length; i++) {
    // console.log(booksContainer[i].bookNameValue !== BookmarkInput.value);
    if (booksContainer[i].bookNameValue === BookmarkInput.value) {
      count++;
      alert("book name is already stored");
    }
  }
  if (count === 0) {
    booksContainer.push(book);
  }
  localStorage.setItem("Books", JSON.stringify(booksContainer));
  displayBooks(booksContainer);

  // clearForm();
}

function deleteBook(itemIndex) {
  booksContainer.splice(itemIndex, 1);
  localStorage.setItem("Books", JSON.stringify(booksContainer));
  displayBooks(booksContainer);
}

function clearForm() {
  BookmarkInput.value = "";
  siteUrlInput.value = "";
}

function displayBooks(arr) {
  var booksBox = "";
  for (var i = 0; i < arr.length; i++) {
    booksBox += `<tr>
          <td>${i + 1}</td>
          <td>${arr[i].bookNameValue}</td>
          <td><a href="${arr[i].siteUrlValue}">${arr[i].siteUrlValue}</a></td>
          <td><button onclick="deleteBook(${i})" class="btn btn-outline-danger text-capitalize">delete</button></td>
      </tr>`;
  }
  document.getElementById("tableBody").innerHTML = booksBox;
}
