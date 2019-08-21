import React, { Component } from "react";
import { View } from "react-native";
import { observer } from "mobx-react";

import { TextBox } from "./styledComponents";

@observer
class TextInputBox extends Component {
  handleChange = text => {
    const { handleChange } = this.props;
    handleChange(text);
  };
  render() {
    const { value, placeholder, isSecure } = this.props;
    return (
      <View>
        <TextBox
          value={value}
          placeholder={placeholder}
          onChangeText={this.handleChange}
          testID="input"
          secureTextEntry={isSecure}
        />
      </View>
    );
  }
}

export default TextInputBox;
