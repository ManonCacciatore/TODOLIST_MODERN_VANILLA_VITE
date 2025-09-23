
import getTemplate from "./template";
import Todo from "../todo/Todo";
import DB from "../../DB";

export default class Todolist {
  constructor(data) {
    this.domElt = document.querySelector(data.elt);
    this.newTodo = null;
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
    this.domElt.innerHTML = getTemplate(this);
  }

  getItemsLeftCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  addItemsInTodos(data) {
    this.newTodo = new Todo(data);
    this.todos.push(this.newTodo);
  }

  addItemInDom () {
    // Ajouter son render dans le DOM
    const todoListeElt = this.domElt.querySelector('[role="todo-list"]');
    const newLi = document.createElement('div');
    todoListeElt.append(newLi);
    newLi.outerHTML = this.newTodo.render();
  }

  renderItemsLeftCount() {
    this.domElt.querySelector('[role="todo-count"] span').innerText = this.getItemsLeftCount();
  }

  async addTodo(input) {
    // Ajouter dans la DB distante
    const todo = await DB.create(input.value);

    this.addItemsInTodos(todo);
    this.addItemInDom();
    this.renderItemsLeftCount();

    input.value = ""
  }

  deleteOneByIdFromTodos(id) {

    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(index, 1);
  }

  deleteOneIdFromDom(id) {
    this.domElt.querySelector("[data-id='" + id + "']").remove();

  }

  async deleteOneById(id) {
    // Je supprime de la DB
    const resp = await DB.deleteOneById(id);
    console.log(resp);
    
    if (resp.ok) {
    // Je supprime des todos
    this.deleteOneByIdFromTodos(id);
    // Je supprime du DOM
    this.deleteOneIdFromDom(id);
    // Rerenderer le itemsLeftCount()
    this.renderItemsLeftCount();
    }
  }


  
}