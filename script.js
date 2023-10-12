let tasks = [];

function addTask() {
    let taskInput = document.getElementById('inputTask');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, i) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${i})">Edit</button>
            <button onclick="deleteTask(${i})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

function editTask(i) {
    let newTaskText = prompt('Edit task:', tasks[i]);

    if (newTaskText !== null) {
        tasks[i] = newTaskText;
        displayTasks();
    }
}

function deleteTask(i) {
    tasks.splice(i, 1);
    displayTasks();
}

displayTasks();