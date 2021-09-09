import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import firebase from 'firebase';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';

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

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button
          color={theme.colors.secondary}
          onPress={() => navigation.push('Adopt')}>
          Adotar
        </Button>
        <View style={{ paddingTop: dp(12) }}>
          <Button
            color={theme.colors.secondary}
            onPress={() => console.log('Em breve')}>
            Ajudar
          </Button>
        </View>
        <View style={{ paddingTop: dp(12) }}>
          <Button
            color={theme.colors.secondary}
            onPress={() => navigation.push('Cadastro')}>
            Cadastrar Animal
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DashboardScreen;
