import styled from 'styled-components/native';
import { dp } from '../../constants/Spacing';

export const StyledButton = styled.View`
  height: ${dp(40)}px;
  width: ${dp(232)}px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: black;
  color: black;
`;
