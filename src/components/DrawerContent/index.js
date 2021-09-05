import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Adotar" onPress={() => props.navigation.push('Adopt')} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
