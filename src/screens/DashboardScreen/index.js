import { View } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
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
