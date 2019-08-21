import React, { Component } from "react";
import { ScrollView, Dimensions } from "react-native";
import { Container } from "./styledComponents";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

const screen = Dimensions.get("screen").height;
const height = screen - 54 - 44;
@observer
class TodoList extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <Container height={height}>
        <ScrollView>
          {todoStore.filterTodos.map(todo => (
            <TodoItem todo={todo} todoStore={todoStore} key={todo.id} />
          ))}
        </ScrollView>
      </Container>
    );
  }
}

export default TodoList;
