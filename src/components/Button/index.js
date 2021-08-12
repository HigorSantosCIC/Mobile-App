import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Typography from '../Typography';
import { StyledButton } from './styles';

const Button = ({ onPress, color, styleTypho, children }) => {
  const renderChild = () => {
    if (typeof children === 'string') {
      return <Typography style={styleTypho}>{children}</Typography>;
    } else {
      return children;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <StyledButton color={color}>{renderChild()}</StyledButton>
    </TouchableWithoutFeedback>
  );
};

export default Button;
