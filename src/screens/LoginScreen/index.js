import { View } from 'react-native';
import React from 'react';
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

const LoginScreen = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <LoginFormContainer>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" style={{ marginTop: dp(20) }} />
      </LoginFormContainer>

      <ButtonContainer style={{ paddingTop: dp(52) }}>
        <Button
          color={theme.colors.primary}
          onPress={() => console.log('Login')}
          styleTypho={{ color: '#434343' }}>
          ENTRAR
        </Button>

        <View style={{ paddingTop: dp(72) }}>
          <Button color="#194F7C" styleTypho={{ color: '#f7f7f7' }}>
            ENTRAR COM FACEBOOK
            <IconButtonContainer>
              <FontAwesome
                name="facebook-square"
                size={20}
                color="#f7f7f7"></FontAwesome>
            </IconButtonContainer>
          </Button>

          <View style={{ paddingTop: dp(8) }}>
            <Button color="#f15f5c" styleTypho={{ color: '#f7f7f7' }}>
              ENTRAR COM GOOGLE
              <IconButtonContainer>
                <FontAwesome
                  name="google-plus"
                  size={20}
                  color="#f7f7f7"></FontAwesome>
              </IconButtonContainer>
            </Button>
          </View>
        </View>
      </ButtonContainer>
    </View>
  );
};

export default LoginScreen;
