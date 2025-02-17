let tasks = [];

function addTask() {
    const taskName = document.getElementById("task-name").value;
    const taskDeadline = document.getElementById("task-deadline").value;

    if (taskName && taskDeadline) {
        const newTask = {
            name: taskName,
            deadline: taskDeadline,
            completed: false
        };

        tasks.push(newTask);
        displayTasks();
        clearForm();
    }
}

function displayTasks() {
    const taskListElement = document.getElementById("task-ul");
    taskListElement.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        taskElement.classList.add(task.completed ? "completed" : "");

        taskElement.innerHTML = `
            <strong>${task.name}</strong><br>
            Deadline: ${task.deadline}
            <button onclick="toggleCompletion(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        `;
        
        taskListElement.appendChild(taskElement);
    });
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearForm() {
    document.getElementById("task-name").value = '';
    document.getElementById("task-deadline").value = '';
}
