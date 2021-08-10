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
import ButtonMain from '../../components/Button';

const LoginScreen = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <LoginFormContainer>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" style={{ marginTop: dp(20) }} />
      </LoginFormContainer>

      <ButtonContainer style={{ paddingTop: dp(52) }}>
        <ButtonMain
          string="ENTRAR"
          color={theme.colors.primary}
          handlePress={() => console.log('Login')}
          styleTypho={{ color: '#434343' }}></ButtonMain>
        {/* <TouchableWithoutFeedback onPress={() => console.log('Login')}>
          <Button color={theme.colors.primary}>
            <Typography style={{ color: '#434343' }}>ENTRAR</Typography>
          </Button>
        </TouchableWithoutFeedback> */}

        <View style={{ paddingTop: dp(72) }}>
          <ButtonMain
            string="ENTRAR COM FACEBOOK"
            color="#194F7C"
            styleTypho={{ color: '#f7f7f7' }}>
            <IconButtonContainer>
              <FontAwesome name="facebook-square" size={20} color="#f7f7f7" />
            </IconButtonContainer>
          </ButtonMain>
          {/* <TouchableWithoutFeedback style={{ paddingTop: 20 }}>
            <Button color="#194F7C">
              <IconButtonContainer>
                <FontAwesome name="facebook-square" size={20} color="#f7f7f7" />
              </IconButtonContainer>
              <Typography style={{ color: '#f7f7f7' }}>
                ENTRAR COM FACEBOOK
              </Typography>
            </Button>
          </TouchableWithoutFeedback> */}

          <View style={{ paddingTop: dp(8) }}>
            <ButtonMain
              color="#f15f5c"
              styleTypho={{ color: '#f7f7f7' }}
              string="ENTRAR COM GOOGLE">
              <IconButtonContainer>
                <FontAwesome name="google-plus" size={20} color="#f7f7f7" />
              </IconButtonContainer>
            </ButtonMain>
            {/* <TouchableWithoutFeedback style={{ paddingTop: 20 }}>
              <Button color="#f15f5c">
                <IconButtonContainer>
                  <FontAwesome name="google-plus" size={20} color="#f7f7f7" />
                </IconButtonContainer>
                <Typography style={{ color: '#f7f7f7' }}>
                  ENTRAR COM GOOGLE
                </Typography>
              </Button>
            </TouchableWithoutFeedback> */}
          </View>
        </View>
      </ButtonContainer>
    </View>
  );
};

export default LoginScreen;
