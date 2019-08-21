import { observable, action } from "mobx";
import { persist } from "mobx-persist";

class TodoModel {
  id;
  @observable description;
  @observable isCompleted;

  constructor(todo) {
    this.id = todo.id;
    this.description = todo.description;
    this.isCompleted = todo.completed;
  }

  @action.bound
  changeTodoCompletionStation() {
    this.isCompleted = !this.isCompleted;
  }

  @action.bound
  updateTodo(todoText) {
    this.description = todoText;
  }
}

export default TodoModel;
