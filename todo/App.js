const inputTask = document.getElementById("inputTask");
const btnAddTask = document.getElementById("btnAddTask");
const newTasks = document.getElementById("newTasks");
const completedTasks = document.getElementById("completedTasks");

// event listeners
btnAddTask.addEventListener("click", () => {
  addTask();
});

function addTask() {
  const value = inputTask.value;
  if (value == "") {
    return;
  }
  inputTask.value = "";

  const listItem = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = value;

  span.addEventListener("click", () => {
    moveTaskToCompletedList(listItem);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    deleteTask(listItem);
  });

  listItem.appendChild(span);
  listItem.appendChild(deleteButton);
  newTasks.appendChild(listItem);
}

function moveTaskToCompletedList(listItem) {
  newTasks.removeChild(listItem);
  completedTasks.appendChild(listItem);
}

function deleteTask(listItem) {
  if (newTasks.contains(listItem)) {
    newTasks.removeChild(listItem);
  }
  if (completedTasks.contains(listItem)) {
    completedTasks.removeChild(listItem);
  }
}
