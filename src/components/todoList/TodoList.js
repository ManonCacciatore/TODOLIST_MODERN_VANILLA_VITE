import getTodoListTemplate from "./template";
import Todo from "../todo/Todo";
import DB from "../../DB";

export default class Todolist {
  constructor(data) {
    this.domElt = document.querySelector(data.elt);
    DB.setApiURL(data.apiURL);
    this.todos = [];
    this.loadTodos();
  }
  async loadTodos() {
    // Je mets dans this.todos des objets de type Todo
    const todos = await DB.findAll();
    this.todos = todos.map((todo) => new Todo(todo));
    this.render();
  }
  render() {
    this.domElt.innerHTML = getTodoListTemplate(this);
  }


  getItemsLeftCount () {
  return this.todos.filter((todo) => !todo.completed).length;
  }
}

