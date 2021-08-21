import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import styled from 'styled-components/native';

const CheckBox = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckContainer>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
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
  overflow-wrap: ;
`;

export default CheckBox;
