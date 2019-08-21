import React, { Component } from "react";
import { Picker } from "react-native";
class Languages extends Component {
  changeLanguage = itemValue => {
    this.props.changeLanguage(itemValue);
  };
  render() {
    const { language } = this.props;
    return (
      <Picker
        selectedValue={language}
        style={{ height: 30, width: 100 }}
        onValueChange={this.changeLanguage}
      >
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Hindi" value="hindi" />
        <Picker.Item label="Telugu" value="telugu" />
      </Picker>
    );
  }
}

export default Languages;
