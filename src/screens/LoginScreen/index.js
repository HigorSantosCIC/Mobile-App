import { TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import { dp } from '../../constants/Spacing';
import Typography from '../../components/Typography';
import { theme } from '../../constants/Theme';
import { Button, ButtonContainer } from './styles';

const LoginScreen = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <View
        style={{
          marginTop: dp(64),
          paddingHorizontal: dp(16),
        }}>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" style={{ marginTop: dp(20) }} />
      </View>

      <ButtonContainer style={{ paddingTop: dp(52) }}>
        <TouchableWithoutFeedback onPress={() => console.log('Login')}>
          <Button color={theme.colors.primary}>
            <Typography style={{ color: '#434343' }}>ENTRAR</Typography>
          </Button>
        </TouchableWithoutFeedback>

        <View style={{ paddingTop: dp(72) }}>
          <TouchableWithoutFeedback style={{ paddingTop: 20 }}>
            <Button color="#194F7C">
              <Typography style={{ color: '#FFFFFF' }}>
                ENTRAR COM FACEBOOK
              </Typography>
            </Button>
          </TouchableWithoutFeedback>

          <View style={{ paddingTop: dp(8) }}>
            <TouchableWithoutFeedback style={{ paddingTop: 20 }}>
              <Button color="#f15f5c">
                <Typography style={{ color: '#FFFFFF' }}>
                  ENTRAR COM GOOGLE
                </Typography>
              </Button>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ButtonContainer>
    </View>
  );
};

export default LoginScreen;
