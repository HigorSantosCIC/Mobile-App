import * as React from 'react';
import { Text } from './styles';

const Typography = ({
  weight = 'normal',
  font = 'Roboto',
  children,
  ...rest
}) => {
  return (
    <Text weight={weight} font={font} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
