import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Alert, AsyncStorage } from "react-native";

import TextInputBox from "../TextInputBox";
import TouchableOpacityButton from "../TouchableOpacityButton";

import { Wrapper, Container } from "./styledComponents";
import { user } from "../../constants";
import { gotoHomeScreen } from "../../utils/navigationutils";
import translate from "../../utils/languages.utils";

@observer
class LoginPage extends Component {
  @observable userName = "";
  @observable password = "";

  saveUserName = userName => {
    this.userName = userName;
  };

  savePassword = password => {
    this.password = password;
  };

  async storeLoginStatus() {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
    } catch (error) {}
  }

  handlePress = () => {
    if (this.userName === user.name && this.password === user.password) {
      this.storeLoginStatus();
      gotoHomeScreen();
    } else Alert.alert("InvalidCredentials");
    this.userName = "";
    this.password = "";
  };
  render() {
    return (
      <Container>
        <Wrapper>
          <TextInputBox
            value={this.userName}
            placeholder={translate("Login_userName")}
            handleChange={this.saveUserName}
            isSecure={false}
          />
          <TextInputBox
            value={this.password}
            placeholder={translate("Login_password")}
            handleChange={this.savePassword}
            isSecure={true}
          />
          <TouchableOpacityButton
            buttonText={translate("Login_button")}
            handlePress={this.handlePress}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default LoginPage;
