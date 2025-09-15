
import './styles.css'

import getTodoTemplate from "./template";

export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.content = data.content;
    this.completed = data.completed;
    this.created_at = data.created_at;
  }
  render() {
    return getTodoTemplate(this);
  }
}
