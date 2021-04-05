class TaskManager {
    constructor() {
        if (localStorage.getItem("tasks")) {
            this.tasks = JSON.parse(localStorage.getItem("tasks"));
        } else {
            this.tasks = [];
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
    }
    addTask(task) {
        this.tasks.unshift(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    removeTask(taskId) {
        let id = parseInt(taskId);
        let object = this.tasks.find(object => {
            return object.id === id;
        });
        let indexOfObject = this.tasks.indexOf(object);
        this.tasks.splice(indexOfObject, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}

class Task {
    constructor(text) {
        this.text = text;
        this.id = idMaker();
    }
}

function idMaker() {
    let id;
    do {
        id = Math.floor(Math.random() * 1000);
    } while (taskManager.tasks.some(task => task.id === id));
    return id;
}


let taskManager = new TaskManager();

