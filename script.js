let newTask = document.querySelector("#new-task");

let form = document.querySelector("form");

let todoUl = document.querySelector("#items");

let completeUl = document.querySelector(".complete-list ul");

function createTask(task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  checkBox.type = "checkbox";
  label.innerText = task;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;
}

function addTask(event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
}


form.addEventListener("submit", addTask);
