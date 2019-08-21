import React from "react";
import { View, StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import TodoApp from "./components/TodoApp";
import LoginPage from "./components/LoginPage";
import SplashScreen from "./components/SplashScreen";

import { screens } from "./constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        <Scene key="root">
          <Scene
            key={screens.splashScreen}
            initial={true}
            component={SplashScreen}
            title="splashScreen"
            hideNavBar
          />
          <Scene
            key={screens.loginPage}
            component={LoginPage}
            title="loginPage"
            hideNavBar
          />
          <Scene
            key={screens.todoApp}
            component={TodoApp}
            title="todoApp"
            hideNavBar
          />
        </Scene>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
