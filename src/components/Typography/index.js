import * as React from 'react';
import { Text } from './styles';

const Typography = ({ weight = 'normal', children, ...rest }) => {
  return (
    <Text weight={weight} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
