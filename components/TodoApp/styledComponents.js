import styled from "styled-components";
export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const BottomNavigationBar = styled.View`
  position: absolute;
  bottom: 0;
  width: ${props => props.width || 0};
`;

export const LogOut = styled.View`
  position: absolute;
  top: 100;
  right: 100;
`;

export const LanguagesWrapper = styled.View`
  position: absolute;
  top: 40;
  right: 130;
  background-color: #33cc33;
`;
