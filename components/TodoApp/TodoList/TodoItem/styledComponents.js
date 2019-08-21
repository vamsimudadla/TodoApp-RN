import styled, { css } from "styled-components";

export const Container = styled.View`
  position: relative;
  height: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 10;
  margin-right: 10;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

export const Text = styled.Text`
  position: absolute;
  left: 60;
  flex: 1;
  ${props =>
    props.isCompleted &&
    css`
      position: absolute;
      left: 60;
      text-decoration: line-through;
    `}
`;

export const TodoBox = styled.View`
  position: absolute;
  left: 60;
`;

export const Delete = styled.Image`
  width: 30;
  height: 30;
`;
