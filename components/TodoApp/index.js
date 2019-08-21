import React, { Component } from "react";
import { AsyncStorage, Dimensions, Alert } from "react-native";
import { observer } from "mobx-react";

import EnterTodoBox from "./EnterTodoBox";
import TodoHeader from "../TodoHeader";
import ActionButton from "../ActionButton";
import BottomBar from "./BottomBar";
import TouchableOpacityButton from "../TouchableOpacityButton";
import TodoList from "./TodoList";
import LoadingMsg from "./LoadingMsg";
import ErrorMsg from "./ErrorMsg";

import { todoStore } from "../../Store/instances";
import {
  Container,
  LanguagesWrapper,
  LogOut,
  BottomNavigationBar
} from "./styledComponents";
import { gotoLoginScreen } from "../../utils/navigationutils";
import { data } from "../../constants";
import translate from "../../utils/languages.utils";
import Languages from "./Languages";

const width = Dimensions.get("screen").width;

@observer
class TodoApp extends Component {
  addTodo = text => {
    const { addTodo, changeEnterTodoBoxState } = todoStore;
    const description = text.trim();
    if (description.length > 0) addTodo(description);
    changeEnterTodoBoxState();
  };

  enterTodoBox = () => {
    const { isEnterTodoBoxActive } = todoStore;
    if (isEnterTodoBoxActive)
      return <EnterTodoBox text="" addTodo={this.addTodo} />;
  };

  renderTodoList = () => {
    const { isEnterTodoBoxActive, fetchStatus } = todoStore;
    if (fetchStatus === data.loading) return <LoadingMsg />;
    else if (fetchStatus === data.err) return <ErrorMsg />;
    else if (fetchStatus === data.loaded) {
      if (!isEnterTodoBoxActive) return <TodoList todoStore={todoStore} />;
    }
  };

  handlePress = () => {
    AsyncStorage.removeItem("isLoggedIn");
    gotoLoginScreen("reset");
  };

  actionButton = () => {
    const { isEnterTodoBoxActive } = todoStore;
    if (!isEnterTodoBoxActive)
      return (
        <ActionButton
          changeEnterTodoBoxState={todoStore.changeEnterTodoBoxState}
        />
      );
  };

  componentDidMount() {
    todoStore.fetchTodosFromServer();
  }

  render() {
    return (
      <Container>
        <TodoHeader />

        {this.enterTodoBox()}
        {this.renderTodoList()}
        {this.actionButton()}

        <BottomNavigationBar width={width}>
          <BottomBar todoStore={todoStore} />
        </BottomNavigationBar>

        <LogOut>
          <TouchableOpacityButton
            buttonText={translate("LogOut_button")}
            handlePress={this.handlePress}
          />
        </LogOut>

        <LanguagesWrapper>
          <Languages
            language={todoStore.language}
            changeLanguage={todoStore.changeLanguage}
          />
        </LanguagesWrapper>
      </Container>
    );
  }
}

export default TodoApp;
