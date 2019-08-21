import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import TextInputBox from "./index";
describe("test cases for text input box", () => {
  it("should call parent function when onChangeText event occurs", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <TextInputBox handleChange={handleChange} />
    );
    const inputBox = getByTestId("input");
    fireEvent.changeText(inputBox, "vamsi");
    expect(handleChange).toHaveBeenCalledWith("vamsi");
  });
});
