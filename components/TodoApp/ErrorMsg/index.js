import React, { Component } from "react";
import { Text } from "react-native";
import { ErrorMessage } from "./styledComponent";
class ErrorMsg extends Component {
  render() {
    return (
      <ErrorMessage>
        <Text>Network error</Text>
      </ErrorMessage>
    );
  }
}

export default ErrorMsg;
