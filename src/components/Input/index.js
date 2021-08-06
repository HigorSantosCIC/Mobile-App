import React from 'react';
import { Container, IconContainer, TextInput } from './styles';
import { FontAwesome } from '@expo/vector-icons';

const Input = ({
  onFocus = () => {
    // onFocus
  },
  onBlur = () => {
    // onBlur
  },
  ...rest
}) => {
  const [focus, setFocus] = React.useState(false);
  const [showCheck, setShowCheck] = React.useState(false);
  const wrapperOnFocus = (e) => {
    setFocus(true);
    setShowCheck(false);
    onFocus(e);
  };

  const wrapperOnBlur = (e) => {
    setFocus(false);
    setShowCheck(true);
    onBlur(e);
  };

  return (
    <Container focus={focus}>
      <TextInput
        underlineColorAndroid="transparent"
        onFocus={wrapperOnFocus}
        onBlur={wrapperOnBlur}
        {...rest}
      />
      {showCheck && (
        <IconContainer>
          <FontAwesome name="check" size={24} color="#589b9b" />
        </IconContainer>
      )}
    </Container>
  );
};

export default Input;
