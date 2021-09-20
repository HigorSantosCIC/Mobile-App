import React from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const SelectOption = ({ radioButtonsData, onPress }) => {
  return (
    <RadioGroup layout="row" radioButtons={radioButtonsData} onPress={onPress} />
  );
};

export default SelectOption;
