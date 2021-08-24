import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Button from '../../components/Button';
import { useTheme } from 'styled-components';
import Typography from '../../components/Typography';
import { dp } from '../../constants/Spacing';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

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

      <Button
        color={theme.colors.secondary}
        onPress={() => console.log('Em breve')}>
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

      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Typography
          style={{
            color: theme.colors.primary,
            paddingTop: dp(44),
            fontSize: 16,
          }}>
          Login
        </Typography>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Signup')}>
        <Typography
          style={{
            color: theme.colors.primary,
            paddingTop: dp(12),
            paddingBottom: dp(68),
            fontSize: 16,
          }}>
          Cadastrar
        </Typography>
      </TouchableOpacity>
      <Image
        style={{ height: 44, width: dp(144) }}
        source={require('../../../assets/logo_primary.png')}
      />

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
