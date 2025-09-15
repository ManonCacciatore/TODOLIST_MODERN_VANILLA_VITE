import './styles.css'

export default function getTodoTemplate(todo) {
  return `<li class="todo">${todo.content}</li>`;
}
