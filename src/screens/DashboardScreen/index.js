import { View } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';
import Typography from '../../components/Typography';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Typography
          font="Courgette"
          style={{
            fontSize: 72,
            color: theme.colors.secondary,
            paddingTop: dp(56),
          }}>
          Olá!
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
          onPress={() => navigation.push('Adopt')}>
          Adotar
        </Button>
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
