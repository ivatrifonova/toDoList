// html elements
let form = document.getElementById("list-form");
let button = document.getElementById("button-submit-text");
let textInput = document.getElementById("list-item-input-text");
let main = document.getElementById('main');
let list = document.getElementById("list");
let warning = document.getElementById("warning");
//handlebars elements
let taskTemplateHTML = document.getElementById("template").innerHTML;
let template = Handlebars.compile(taskTemplateHTML);

window.addEventListener("DOMContentLoaded", () => {
    displayTasks();
});

button.addEventListener("click", (event) => {
    event.preventDefault();

    if (!textInput.value) {
        warning.style.visibility = "visible";
    } else {
        addNewTask(textInput.value);
        form.reset();
        warning.style.visibility = "hidden";
    }

});


function addNewTask(text) {
    let newTask = new Task(text);
    taskManager.addTask(newTask);
    displayTasks();
}

function displayTasks() {
    list.html = '';
    let html = template(taskManager);
    list.innerHTML = html;
    addEventListenersToTasks();
}

function addEventListenersToTasks() {
    taskManager.tasks.forEach(task => {
        let TaskId = task.id;
        let taskButtonId = TaskId + "-button";
        let element = document.getElementById(taskButtonId);
        element.addEventListener("click", () => {
            taskManager.removeTask(element.id);
            displayTasks();
        });
    });
}

