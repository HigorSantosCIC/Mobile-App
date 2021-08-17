import styled from 'styled-components/native';
import { dp } from '../../constants/Spacing';

export const SignupFormContainer = styled.View``;

export const SignupFormTitle = styled.View`
  margin-top: ${dp(32)}px;
  margin-bottom: ${dp(32)}px;
`;

export const Button = styled.View`
  height: ${dp(40)}px;
  width: ${dp(232)}px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  flex-direction: row;
`;

export const IconButtonContainer = styled.View`
  padding-right: 8px;
  max-width: 100%;
  text-align: center;
`;
export const ButtonContainer = styled.View`
  align-items: center;
`;
