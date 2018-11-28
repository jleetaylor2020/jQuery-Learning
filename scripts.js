//  EXAMINE THE DOCUMENT OBJECT//
// console.dir(document);


// console.log("Hello World");
// document.title = 123;
// console.log(document.all);

// console.log(document.forms);
// console.log(document.images);

// console.log(document.getElementById('header-title'));


// var headerTitle = document.getElementById('header-title');

// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Good-Bye";

// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = 'solid 3px black';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].textContent = "Hello One";
items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'yellow';

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'lightgray';
}