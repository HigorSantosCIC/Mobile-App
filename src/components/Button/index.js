import React from 'react';
import { Alert, Button } from 'react-native';
import { ContainerButton } from './styles';

export default function ButtonMain({ children, ...rest}) {
  return (
    <ContainerButton>
      <Button
        color="#000000"
        title={children}
        onPress={() => Alert.alert('Works')}
      />
    </ContainerButton>
  );
}
