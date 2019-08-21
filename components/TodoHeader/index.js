import React, { Component } from "react";
import { Header } from "react-native-elements";

import { styles } from "./styles";
import translate from "../../utils/languages.utils";

class TodoHeader extends Component {
  render() {
    return (
      <Header
        placement="left"
        leftComponent={{
          text: translate("Header_todoAppTitle"),
          style: styles.headerText
        }}
        containerStyle={styles.header}
      />
    );
  }
}

export default TodoHeader;
