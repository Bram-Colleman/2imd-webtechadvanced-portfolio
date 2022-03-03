export default class Todo {
    constructor(title) {
        this.title = title;
    }
  
    createElement() {
      let li = document.createElement("li");
      li.innerHTML = this.title;
      li.classList.add("prior-high");
      // check if the todo item includes a priority like medium: to generate the correct classnames
      // don't forget to hook up an event listener for the click event
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
      // this function should append the note to the screen somehow
    let todo = this.createElement();
    document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      localStorage.setItem(localStorage.length+1, this.title);
      console.log(localStorage);


    }
  }
  