import React, { Component } from "react";
import { TextBox } from "./styledComponents";
import translate from "../../../utils/languages.utils";
class TextInputBox extends Component {
  state = {
    text: this.props.text
  };

  handleText = text => {
    this.setState({
      text
    });
  };

  handleKeyPress = e => {
    const { addTodo } = this.props;
    addTodo(this.state.text);
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <TextBox
        onChangeText={this.handleText}
        placeholder={translate("EnterTodoBox_placeHolder")}
        value={this.state.text}
        onSubmitEditing={this.handleKeyPress}
      />
    );
  }
}

export default TextInputBox;
