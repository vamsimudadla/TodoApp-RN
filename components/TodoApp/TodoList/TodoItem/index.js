import React, { Component } from "react";
import { View, Vibration, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { observer } from "mobx-react";
import { Container, TodoBox, Text, Delete } from "./styledComponents";
import { observable } from "mobx";
import EnterTodoBox from "../../EnterTodoBox";
@observer
class TodoItem extends Component {
  @observable isTodoEditable = false;
  handlePress = () => {
    const { todo } = this.props;
    todo.changeTodoCompletionStation();
  };

  deleteTodo = () => {
    const { todo, todoStore } = this.props;
    todoStore.deleteTodo(todo);
  };

  changeTodoEditableState = () => {
    const { todo } = this.props;
    if (!todo.isCompleted) {
      Vibration.vibrate(100);
      this.isTodoEditable = !this.isTodoEditable;
    }
  };

  updateTodo = text => {
    const { todo } = this.props;
    todo.updateTodo(text);
    this.changeTodoEditableState();
  };

  renderTodo = () => {
    const { todo } = this.props;
    if (this.isTodoEditable && !todo.isCompleted)
      return (
        <TodoBox>
          <EnterTodoBox text={todo.description} addTodo={this.updateTodo} />
        </TodoBox>
      );
    else
      return (
        <Text
          isCompleted={todo.isCompleted}
          onLongPress={this.changeTodoEditableState}
        >
          {todo.description}
        </Text>
      );
  };

  render() {
    const { todo } = this.props;
    return (
      <Container>
        <CheckBox checked={todo.isCompleted} onPress={this.handlePress} />
        {this.renderTodo()}
        <TouchableOpacity onPress={this.deleteTodo}>
          <Delete source={require("../../../../assets/images/delete.png")} />
        </TouchableOpacity>
      </Container>
    );
  }
}

export default TodoItem;
