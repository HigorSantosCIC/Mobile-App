import React from "react";
import {TextInput} from "react-native";
import {Container} from "./styles";


const Input = ({...rest}) => {
  return (
    <Container>
      <TextInput {...rest}/>
    </Container>
  )
}

export default Input