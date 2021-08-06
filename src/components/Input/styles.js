import styled from 'styled-components/native';

const borderColor = ({ focus, theme }) =>
  focus ? theme.colors.primary : '#e6e7e8';

const borderWidth = ({ focus }) => (focus ? '2px' : '1px');

export const Container = styled.View`
  width: 100%;
  border-bottom-width: ${borderWidth};
  border-color: ${borderColor};
  padding-bottom: 2px;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: #575756;
`;
export const IconContainer = styled.View`
  align-self: center;
  padding-right: 4px;
`;
