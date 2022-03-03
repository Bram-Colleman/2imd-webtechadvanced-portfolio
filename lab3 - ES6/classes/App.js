import Todo from './Todo.js';


export default class App {
    constructor() {
      this.setupEventListeners(); 
      this.loadFromStorage();
    }
  
    setupEventListeners() {
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this));
    }
  
    createItem(e) {
        if (e.key === 'Enter' && document.querySelector("#add-item-text").value != ""){
            let todo = new Todo(document.querySelector("#add-item-text").value);
            todo.add();
            todo.saveToStorage();
            this.reset();
        }
    }
  
    loadFromStorage() {
      // HINT🤩
      // load all items from storage here and add them to the screen
      // use the Todo class to create the elements
    }
  
    reset() {
        document.querySelector("#add-item-text").value = "";
    }
  }
