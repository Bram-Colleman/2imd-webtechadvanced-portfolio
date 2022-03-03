export default class Todo {
    constructor(title) {
        this.title = title;
    }
  
    createElement() {
      let li = document.createElement("li");

      if(this.title.startsWith("low:")){
        li.classList.add("prior-low");
        li.innerHTML = this.title.slice(4);
    } 
    else if (this.title.startsWith("high:")){
        li.classList.add("prior-high");
        li.innerHTML = this.title.slice(5);
    } 
    else if (this.title.startsWith("medium:")){
        li.classList.add("prior-medium");
        li.innerHTML = this.title.slice(7);
    } 
    else {
          li.classList.add("prior-medium");
          li.innerHTML = this.title;

      }
      li.addEventListener("click", this.markDone.bind(li));
      return li;
    }
  
    markDone(e) {
      if(this.classList.contains("done")){
          this.remove();
      } else {
          this.classList.add("done");
      }
    }
  
    add() {
    let todo = this.createElement();
    document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      localStorage.setItem(this.title, JSON.stringify(this));
        console.log(localStorage);

    }
  }
  