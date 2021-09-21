import React, { useEffect, useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import api from '../../services/api';
import firebase from 'firebase';
import { View, Image } from 'react-native';
import Typography from '../Typography';
import { dp } from '../../constants/Spacing';

const DrawerContent = (props) => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    let currentUserUID = firebase.auth().currentUser.uid;
    api.Users.show(currentUserUID).then((user) => setUser(user));
  }, []);

  useEffect(() => {
    if (user) {
      getImage();
    }
  }, [user]);

  const getImage = async () => {
    const ref = firebase.storage().ref().child(`images/users/${user.userName}`);
    const remoteURL = await ref.getDownloadURL();
    setImage(remoteURL);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          height: dp(180),
          // backgroundColor: theme.colors.primary,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View>
          {image && (
            <Image
              style={{ height: dp(150), width: 'auto' }}
              source={{ uri: image }}
            />
          )}
          <Typography
            weight="medium"
            style={{
              fontSize: 14,
              color: '#434343',
              alignSelf: 'flex-start',
              padding: 10,
            }}>
            {user && user.userName}
          </Typography>
        </View>
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
