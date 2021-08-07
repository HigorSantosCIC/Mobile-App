import styled from 'styled-components/native';
import { dp } from '../../constants/Spacing';

export const Button = styled.View`
  height: ${dp(40)}px;
  width: ${dp(232)}px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
`;
