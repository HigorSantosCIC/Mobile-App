import styled from 'styled-components/native';

const font = ({ weight }) => {
  if (weight === 'bold') {
    return 'Roboto_Bold';
  } else if (weight === 'medium') {
    return 'Roboto_Medium';
  } else {
    return 'Roboto';
  }
};

export const Text = styled.Text`
  font-family: ${font};
`;
