import React, { useState } from 'react';
import { Checkbox, Text } from 'react-native-paper';

const CheckBox = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text>{text}</Text>
    </>
  );
};

export default CheckBox;
