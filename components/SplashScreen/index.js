import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import { Container, Text } from "./styledComponents";
import { gotoHomeScreen, gotoLoginScreen } from "../../utils/navigationutils";
import translate from "../../utils/languages.utils";

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(this.retrieveLoginStatus, 2000);
  }

  async retrieveLoginStatus() {
    try {
      const value = await AsyncStorage.getItem("isLoggedIn");
      if (value) {
        gotoHomeScreen();
      } else gotoLoginScreen();
    } catch (error) {
      gotoLoginScreen();
    }
  }
  render() {
    return (
      <Container>
        <Text>{translate("SplashScreen_todosTitle")}</Text>
      </Container>
    );
  }
}

export default SplashScreen;
