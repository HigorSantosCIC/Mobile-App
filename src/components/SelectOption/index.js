import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const SelectOption = ({ radioButtonsData }) => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <RadioGroup
      layout="row"
      radioButtons={radioButtons}
      onPress={onPressRadioButton}
    />
  );
};

export default SelectOption;
