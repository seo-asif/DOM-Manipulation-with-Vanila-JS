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

function completeTask() {
  let listItem = this.parentNode;
  let button = document.createElement("button");
  button.className = "delete";
  button.innerText = "Delete";

  listItem.appendChild(button);
  let checkBox = listItem.querySelector('input[type= "checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);

  bindCompleteItems(listItem, deleteTask);
}

let bindInCompleteItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

function bindCompleteItems(taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".delete");

  deleteButton.onclick = deleteButtonClick;
}

function deleteTask() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}

for (let i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
