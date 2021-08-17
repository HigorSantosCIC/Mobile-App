import styled from 'styled-components/native';
import { dp } from '../../constants/Spacing';

export const RegisterFormContainer = styled.View`
  margin-top: ${dp(64)}px;
  padding-horizontal: ${dp(16)}px;
`;

export const TextContainer = styled.View`
  padding-horizontal: ${dp(16)}px;
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
  /* flex-direction: row; */
  align-items: center;
  margin: 10px;
  justify-content: space-around;
  padding: 10px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #f1f2f2;
`;

export const CheckContainer = styled.View`
  flex-direction: row;
  padding: 10px 0.5px;
  align-items: center;
`;

export const ViewContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
