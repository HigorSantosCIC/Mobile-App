import styled from 'styled-components/native';
import { dp } from '../../constants/Spacing';

export const RegisterFormContainer = styled.View`
  margin-top: ${dp(64)}px;
  padding-left: ${dp(16)}px;
  padding-right: ${dp(16)}px;
`;

export const TextContainer = styled.View`
  padding-left: ${dp(16)}px;
  padding-right: ${dp(16)}px;
  margin-top: ${dp(20)}px;
  align-items: center;
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

export const ButtonContainer = styled.View`
  padding-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
