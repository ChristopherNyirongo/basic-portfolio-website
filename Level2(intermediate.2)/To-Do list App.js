

const inputTask = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

// Render tasks function
function renderTasks() {
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = task.text;
        if (task.completed) {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.color = "gray";
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function() {
            tasks[index].completed = true;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    });
}

// Add task function
function addTask() {
    const taskText = inputTask.value.trim();
    if (taskText === "") {
        alert("Task field can't be empty");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    inputTask.value = ""; // clear input
}

// Render tasks on page load
window.addEventListener("load", renderTasks);
