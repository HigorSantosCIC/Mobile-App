import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectContainer } from './styles';

const SelectOption = ({ radioButtonsData }) => {
  console.log(radioButtonsData);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <SelectContainer>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
    </SelectContainer>
  );
};

export default SelectOption;
