import React, { Component } from "react";
import { Text } from "react-native";

import { Button } from "./styledComponents";
class TouchableOpacityButton extends Component {
  handlePress = () => {
    const { handlePress } = this.props;
    handlePress();
  };
  render() {
    const { buttonText } = this.props;
    return (
      <Button onPress={this.handlePress}>
        <Text>{buttonText}</Text>
      </Button>
    );
  }
}

export default TouchableOpacityButton;
