let username = document.getElementById("username");
const users = [];

const section = document.getElementById("section");

function login() {}

function addTask() {
  const addNewTask = prompt("Task name:");
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML += `
  <h3>${addNewTask}</h3>
  <button class="red">Remove</button>
  <button class="blue">Change Text</button>
  `;
  newTask.dataset.text = newTask;

  section.appendChild(newTask);
}
