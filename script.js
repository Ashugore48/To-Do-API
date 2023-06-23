// Load tasks from local storage on page load
window.onload = function () {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  displayTasks(tasks);
};

// Add task to the list
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  var newTask = taskInput.value.trim();

  if (newTask === "") {
    alert("Task field can't be empty")
    return;
  }

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks(tasks);
  taskInput.value = "";
}

// Display tasks in the list
function displayTasks(tasks) {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    var taskItem = document.createElement("div");
    taskItem.classList.add("todo-item");

    var taskText = document.createElement("span");
    taskText.textContent = task;

    var taskDelete = document.createElement("button");
    taskDelete.textContent = "Delete";
    taskDelete.onclick = function () {
      deleteTask(task);
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDelete);
    taskList.appendChild(taskItem);
  });
}

// Delete task from the list
function deleteTask(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  var index = tasks.indexOf(task);

  if (index > -1) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
  }
}
document.addEventListener('keypress', (event)=>{

  // event.keyCode or event.which  property will have the code of the pressed key
  let keyCode = event.keyCode ? event.keyCode : event.which;

  // 13 points the enter key
  if(keyCode === 13) {
    // call click function of the buttonn 
    addTask();
  }
    
});
