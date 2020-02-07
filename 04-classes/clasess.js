// Class declaration
class Task {
	// Constructor
	constructor(title) {
		if (!title) throw new Error("We need a title!!!");
		this.title = title;
		this.completed = false;
	}
}

// Creamos una instancia de Task
const tarea = new Task("Aprender JavaScript");
console.log(tarea instanceof Task);

const TasksList = class {
	constructor() {
		this.tasks = [
			{title: 'Aprender Firebase', completed: false},
			{title: 'Aprender CSS', completed: true},
			{title: 'Aprender HTML', completed: false},
		]
	}
	
	// Getters
	get uncompleted() {
		return [...this.tasks].filter(task => !task.completed);
	}
	
	get completed() {
		return [...this.tasks].filter(task => task.completed);
	}
	
	// Setters
	set addTask(task) {
		this.tasks.push(task)
	}
	
	// Métodos
	search(search) {
		return this.tasks.find(task=> task.title.includes(search));
	}
	
	removeTask(index) {
		this.tasks.splice(index, 1);
	}
	
	// Static
	static normaliceTask(title) {
		title = title.trim();
		return title.charAt(0).toUpperCase() + title.substring(1);
	}
}


const tareas = new TasksList()

const tarea2 = new Task("Aprender Vuex");
tareas.addTask = {...tarea2};

console.log(tareas.search("Vuex"));

console.log(tareas.constructor.normaliceTask("    esto es una tarea   "))

// Subclassing 
class Reminder extends Task {
	constructor(title, date) {
		super(title);
		this.date = date;
	}
	
	get duration() {
		return `${this.title} finaliza el ${this.date}`;
	}
}

const producir = new Reminder("Producir lección eterna", "8 de Febrero de 2020");
console.log(producir.duration)