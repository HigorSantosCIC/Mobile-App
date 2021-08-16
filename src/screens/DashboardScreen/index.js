import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import * as firebase from 'firebase';
import Typography from '../../components/Typography';

const DashboardScreen = () => {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.Users.show(currentUserUID).then((user) => setUser(user));
  }, []);
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      {user && (
        <>
          <Typography>{user.email}</Typography>
          <Typography>{user.name}</Typography>
        </>
      )}
    </View>
  );
};

export default DashboardScreen;
