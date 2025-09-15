
import './styles.css'

export default function getTodoListTemplate(todoList) {
  return `
      <h1>Ma todoList</h1>
      <ul class="todolist">
          ${todoList.todos.map((todo) => todo.render()).join("")}
      </ul>
    `;
}