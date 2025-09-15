import './styles.css'

export default function getTodoTemplate(todo) {
  return `
            <li data-id="1" class="${todo.completed ? "completed" : ""}">
            <div class="view">
              <input class="toggle" type="checkbox" ${
                todo.completed ? "checked" : ""} 
                />
              <label>${todo.content}</label>
              <button class="destroy"></button>
            </div
            <input class="edit" value="${todo.content}"
            </li>
            `
}
