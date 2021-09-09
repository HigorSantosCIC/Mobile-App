import React, { useEffect, useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import api from '../../services/api';
import firebase from 'firebase';
import { View } from 'react-native';
import Typography from '../Typography';
import { theme } from '../../constants/Theme';
import { dp } from '../../constants/Spacing';

const DrawerContent = (props) => {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.Users.show(currentUserUID).then((user) => setUser(user));
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          height: dp(150),
          backgroundColor: theme.colors.primary,
          flexDirection: 'row',
        }}>
        <Typography
          weight="medium"
          style={{
            fontSize: 14,
            color: '#434343',
            alignSelf: 'flex-end',
            paddingLeft: 5,
            paddingBottom: 5,
          }}>
          {user && user.name}
        </Typography>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Adotar" onPress={() => props.navigation.push('Adopt')} />
      <DrawerItem
        label="Fazer Logout"
        onPress={() => {
          api.Sessions.destroy();
          props.navigation.push('Home');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
