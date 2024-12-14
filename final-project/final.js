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
    section.innerHTML += `
    <div class="banner">
      <h2>Welcome ${username.value}</h2>
      <button onclick="logout()">Logout</button>
    </div>
    <button onclick="addTask()">Add Task</button>
    `;
  }
}

function logout() {
  window.location.href = "index.html";
}

let tasks = [];

let taskId = 0;

function addTask() {
  const addNewTask = prompt("Task name:");
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML += `
  <h4 onclick="done(this)">${addNewTask}</h4>
  <button class="red" onclick="removeTask(this)">Remove</button>
  <button class="blue" onclick="renameTask()">Change Text</button>
  `;
  newTask.dataset.text = newTask;

  tasks.push(newTask);

  section.appendChild(newTask);
  console.log(tasks);
}

function done(element) {
  if (element.style.textDecoration !== "line-through") {
    element.style.textDecoration = "line-through";
  } else {
    element.style.textDecoration = "none";
  }
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
