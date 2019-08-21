import TodoModel from "../TodoModel";
import { Alert } from "react-native";
import { observable, action, computed, reaction } from "mobx";
import { filters, data } from "../../constants";
import { setLocale } from "../../utils/languages.utils";

class TodoStore {
  @observable todos = [];
  @observable language = "english";
  @observable isEnterTodoBoxActive = false;
  @observable activeFilter = filters.all;
  @observable fetchStatus = data.loading;

  @action.bound
  addTodo(todoText) {
    const todo = {
      id: Math.random(),
      description: todoText,
      completed: false
    };
    const todoModel = new TodoModel(todo);
    this.todos.push(todoModel);
  }

  @action.bound
  changeLanguage(language) {
    this.language = language;
    setLocale(language);
  }

  @action.bound
  changeEnterTodoBoxState() {
    this.isEnterTodoBoxActive = !this.isEnterTodoBoxActive;
  }

  @action.bound
  deleteTodo(todo) {
    Alert.alert(
      "confirmation",
      "do you want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            const index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
          }
        }
      ],
      { cancelable: false }
    );
  }

  @action.bound
  changeActiveFilter(filter) {
    this.activeFilter = filter;
    this.isEnterTodoBoxActive = false;
  }

  @computed get filterTodos() {
    if (this.activeFilter === filters.all) return this.todos;
    else if (this.activeFilter === filters.active)
      return this.todos.filter(todo => todo.isCompleted === false);
    else if (this.activeFilter === filters.completed)
      return this.todos.filter(todo => todo.isCompleted === true);
  }

  @action.bound
  addFetchedTodos(todos) {
    todos.map(todo => {
      const todoModel = new TodoModel(todo);
      this.todos.push(todoModel);
    });
  }

  fetchTodosFromServer() {
    if (this.todos.length === 0) {
      fetch("https://api.myjson.com/bins/nhomr")
        .then(response => response.json())
        .then(responseJson => {
          this.addFetchedTodos(responseJson);
          this.fetchStatus = data.loaded;
        })
        .catch(e => {
          console.log("error: ", e);
          this.fetchStatus = data.err;
        });
    }
  }
}

export default TodoStore;
