import { Actions } from "react-native-router-flux";
import { screens } from "../../constants";

export const gotoHomeScreen = (type = "replace") =>
  Actions[type](screens.todoApp);
export const gotoLoginScreen = (type = "replace") =>
  Actions[type](screens.loginPage);
