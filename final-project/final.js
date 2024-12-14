let username = document.getElementById("username");
let password = document.getElementById("password");

const users = [];

const section = document.getElementById("section");

function login() {
  let containsNumber = false;
  let containsUppercase = false;

  for (let i = 0; i < password.value.length; i++) {
    const currentCharacter = password.value[i];

    // Is there at least 1 number
    if (isNaN(currentCharacter) === false) {
      containsNumber = true;
    }

    // Is there at least 1 uppercase letter
    if (
      currentCharacter == currentCharacter.toUpperCase() &&
      isNaN(currentCharacter)
    ) {
      containsUppercase = true;
    }
  }

  if (username.value === "" || password.value === "") {
    alert("Username or Password empty");
  } else if (password.value.length < 8) {
    alert("Password must be 8 characters or longer");
    console.log("no");
  } else if (containsNumber == false && containsUppercase == false) {
    alert("You need at leat one number and one uppercase letter");
  } else {
    section.innerHTML = "";
    section.innerHTML += `<button onclick="addTask()">Add Task</button>`;
  }
}

let tasks = [];

let taskId = 0;
function showTasks() {
  section.innerHTML = "";

  myFriends.forEach(function (friend, friendIndex) {});
}

function addTask() {
  const addNewTask = prompt("Task name:");
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML += `
  <h3>${addNewTask}</h3>
  <button class="red" onclick="removeTask(this)">Remove</button>
  <button class="blue" onclick="renameTask()">Change Text</button>
  `;
  newTask.dataset.text = newTask;

  tasks.push(newTask);

  section.appendChild(newTask);
  console.log(tasks);
}

function removeTask(button) {
  // Remove the task from the DOM
  const taskToRemove = button.parentElement;
  taskToRemove.remove();

  // Removes the task from the `tasks` array
  const index = tasks.indexOf(taskToRemove);
  if (index > -1) {
    tasks.splice(index, 1);
  }

  console.log(tasks);
}

function renameTask() {}
