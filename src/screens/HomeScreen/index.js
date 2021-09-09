import { Image, View } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Typography
        font="Courgette"
        style={{
          fontSize: 72,
          color: theme.colors.secondary,
          paddingTop: dp(56),
        }}>
        Ola!
      </Typography>
      <View style={{ paddingHorizontal: dp(48), paddingVertical: dp(52) }}>
        <Typography style={{ textAlign: 'center', fontSize: 16 }}>
          Bem vindo ao Meau!
        </Typography>
        <Typography style={{ textAlign: 'center', fontSize: 16 }}>
          Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.
        </Typography>
        <Typography style={{ textAlign: 'center', fontSize: 16 }}>
          Qual o seu interesse?
        </Typography>
      </View>

      <View style={{ paddingTop: dp(12) }}>
        <Button
          color={theme.colors.primary}
          onPress={() => navigation.push('Signup')}>
          Cadastrar
        </Button>
      </View>
      <View style={{ paddingTop: dp(12) }}>
        <Button
          color={theme.colors.primary}
          onPress={() => navigation.push('Login')}>
          Login
        </Button>
      </View>

      <View style={{ marginTop: dp(60) }}>
        <Image
          style={{ height: 44, width: dp(144) }}
          source={require('../../../assets/logo_primary.png')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
