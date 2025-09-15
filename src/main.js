import './style.css'

import Todolist from "./components/todoList/TodoList";


new Todolist({
  elt: "#app",
  apiURL: 'https://68ad9557a0b85b2f2cf3e1ba.mockapi.io/',
});
