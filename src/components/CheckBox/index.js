import React, { useState } from 'react';
import CheckBox from 'react-native-check-box';

const CheckBoxComponent = () => {
  // const [state, setState] = useState(false);
  return (
    <CheckBox
      onClick={() => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }}
      isChecked={this.state.isChecked}
      leftText={'CheckBox'}
    />
  );
};

export default CheckBoxComponent;
