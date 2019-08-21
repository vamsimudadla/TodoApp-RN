import React, { Component } from "react";
import { LoadingMessage, Loader, LoadingText } from "./styledComponent";
class LoadingMsg extends Component {
  render() {
    return (
      <LoadingMessage>
        {/* <Loader /> */}
        <LoadingText>Loading...</LoadingText>
      </LoadingMessage>
    );
  }
}

export default LoadingMsg;
