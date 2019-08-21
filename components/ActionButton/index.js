import React, { Component } from "react";
import ActionButton from "react-native-action-button";

class Button extends Component {
  changeEnterTodoBoxState = () => {
    this.props.changeEnterTodoBoxState();
  };
  render() {
    return (
      <ActionButton
        buttonColor="#3D6DCC"
        hideShadow={true}
        offsetX={10}
        offsetY={70}
        onPress={this.changeEnterTodoBoxState}
      />
    );
  }
}

export default Button;
