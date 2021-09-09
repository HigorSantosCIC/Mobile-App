import { Alert, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../../components/Input';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';
import {
  ButtonContainer,
  IconButtonContainer,
  LoginFormContainer,
} from './styles';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../../components/Button';
import api from '../../services/api';
import Typography from '../../components/Typography';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    api.Sessions.create(email, password)
      .then(() => navigation.push('Logged'))
      .catch(() => Alert.alert('E-mail ou senha incorretos'));
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <LoginFormContainer>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          style={{ marginTop: dp(20) }}
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
      </LoginFormContainer>

      <ButtonContainer style={{ paddingTop: dp(52) }}>
        <Button
          color={theme.colors.primary}
          onPress={handleLogin}
          styleTypho={{ color: '#434343' }}>
          ENTRAR
        </Button>

        <View style={{ paddingTop: dp(72) }}>
          <Button color="#194F7C" styleTypho={{ color: '#f7f7f7' }}>
            <IconButtonContainer>
              <FontAwesome name="facebook-square" size={20} color="#f7f7f7" />
            </IconButtonContainer>
            <Typography style={{ color: '#f7f7f7' }}>
              ENTRAR COM FACEBOOK
            </Typography>
          </Button>

          <View style={{ paddingTop: dp(8) }}>
            <Button color="#f15f5c" styleTypho={{ color: '#f7f7f7' }}>
              <IconButtonContainer>
                <FontAwesome name="google-plus" size={20} color="#f7f7f7" />
              </IconButtonContainer>
              <Typography style={{ color: '#f7f7f7' }}>
                ENTRAR COM GOOGLE
              </Typography>
            </Button>
          </View>
        </View>
      </ButtonContainer>
    </View>
  );
};

export default LoginScreen;
