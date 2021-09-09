import { Text, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Input from '../../components/Input';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';
import { SignupFormContainer, SignupFormTitle } from './styles';
import Button from '../../components/Button';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import ImageUploader from '../../components/ImageUploader';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignup = () => {
    api.Users.create(
      fullName,
      age,
      email,
      state,
      city,
      address,
      phone,
      userName,
      password,
    )
      .then(() => navigation.push('Logged'))
      .catch((err) =>
        Alert.alert('Não foi possível realizar o cadastro', err.message),
      );
  };

  return (
    <ScrollView>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#FAFAFA',
          padding: dp(16),
        }}>
        <View
          backgroundColor={theme.colors.primary}
          styleTypho={{ color: '#434343' }}
          style={{ borderRadius: dp(5), padding: dp(8) }}>
          <Text color={theme.colors.primary}>
            As informações preenchidas serão divulgadas apenas para a pessoa com a
            qual você realizar o processo de adoção e/ou apadrinhamento, após a
            formalização do processo.
          </Text>
        </View>

        <SignupFormTitle>
          <Text>INFORMAÇÕES PESSOAIS</Text>
        </SignupFormTitle>

        <SignupFormContainer>
          <Input
            placeholder="Nome completo"
            style={{ marginTop: dp(20) }}
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Idade"
            style={{ marginTop: dp(20) }}
            value={age}
            onChangeText={(age) => setAge(age)}
            autoCapitalize="none"
          />
          <Input
            placeholder="E-mail"
            style={{ marginTop: dp(20) }}
            value={email}
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Estado"
            style={{ marginTop: dp(20) }}
            value={state}
            onChangeText={(state) => setState(state)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Cidade"
            style={{ marginTop: dp(20) }}
            value={city}
            onChangeText={(city) => setCity(city)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Endereço"
            style={{ marginTop: dp(20) }}
            value={address}
            onChangeText={(address) => setAddress(address)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Telefone"
            style={{ marginTop: dp(20) }}
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            autoCapitalize="none"
          />

          <SignupFormTitle>
            <Text marginTop={dp(80)}>INFORMAÇÕES DE PERFIL</Text>
          </SignupFormTitle>

          <Input
            placeholder="Nome de usuário"
            style={{ marginTop: dp(20) }}
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            style={{ marginTop: dp(20) }}
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <Input
            placeholder="Confirmação de senha"
            style={{ marginTop: dp(20) }}
            value={passwordConfirmation}
            onChangeText={(passwordConfirmation) =>
              setPasswordConfirmation(passwordConfirmation)
            }
            secureTextEntry={true}
          />

          <SignupFormTitle>
            <Text>FOTO DE PERFIL</Text>
          </SignupFormTitle>
          <ImageUploader id={userName} folder="users" />
        </SignupFormContainer>
        <Button
          color={theme.colors.primary}
          onPress={handleSignup}
          styleTypho={{ color: '#434343' }}>
          FAZER CADASTRO
        </Button>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
