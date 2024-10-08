//list of todo items
let todoItemsList = [];

function addItem() {
  // gets item
  let item = document.getElementById("item").value;
  // adds to list of todo items
  todoItemsList.push(item);
  // updates list
  document.getElementById("list").innerHTML += `<li>${item}</li>`;
}

function summarizeList() {
  document.getElementById("summary").innerHTML = `Total Items: ${
    todoItemsList.length
  }<br/>
  First Item: ${todoItemsList[0]}<br/>
  Last Item: ${todoItemsList[todoItemsList.length - 1]}`;
}
