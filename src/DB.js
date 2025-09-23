export default class DB {
  static setApiURL(data) {
    this.apiURL = data;
  }
  static async findAll() {
    const response = await fetch(this.apiURL + "todos");
    return response.json();
  }


  static async create(data) {
    const response = await fetch(this.apiURL + "todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: data,
        completed: false,
      }),
    });
    return response.json();
  }

   static async deleteOneById(id) {
    const response = await fetch(this.apiURL + "todos/" + id, {
      method: "DELETE",
    });
    return response;
  }

  static async updateOne(todo) {
    const response = await fetch(this.apiURL + "todos/" + todo.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: todo.content,
        completed: todo.completed,
      }),
    });
    return response;
  }


}
