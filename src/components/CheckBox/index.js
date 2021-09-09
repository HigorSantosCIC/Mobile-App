import React, { useState } from 'react';
import { Checkbox, Text } from 'react-native-paper';
import styled from 'styled-components/native';

const CheckBox = ({ text, onPress }) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckContainer>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
          onPress(text, !checked);
        }}
      />
      <Text>{text}</Text>
    </CheckContainer>
  );
};

export const CheckContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex-flow: wrap;
  width: 100%;
`;

export default CheckBox;
