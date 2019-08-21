import styled, { keyframes } from "styled-components";

// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

export const Loader = styled.View`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 80px;
  height: 80px;
  /* animation:  2s linear infinite; */
`;

export const LoadingMessage = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-size: 25px;
  margin-left: 30px;
`;
