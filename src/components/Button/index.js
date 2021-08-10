import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Typography from '../Typography';
import { Button } from './styles';

const ButtonMain = ({ handlePress, color, styleTypho, children }) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Button color={color}>
        <Typography style={styleTypho}>{children}</Typography>
      </Button>
    </TouchableWithoutFeedback>
  );
};
export default ButtonMain;
