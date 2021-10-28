import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import Button from '../../components/Button';
import ImageUploader from '../../components/ImageUploader';
import Typography from '../../components/Typography';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';
import api from '../../services/api';
import { Input, SignupFormContainer, SignupFormTitle } from './styles';
import uuid from 'react-native-uuid';

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
  const [avatarUrl, setAvatarUrl] = useState('');

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
      avatarUrl,
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
          <Typography>INFORMAÇÕES PESSOAIS</Typography>
        </SignupFormTitle>

        <SignupFormContainer>
          <Input
            placeholder="Nome completo"
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Idade"
            value={age}
            onChangeText={(age) => setAge(age)}
            autoCapitalize="none"
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Estado"
            value={state}
            onChangeText={(state) => setState(state)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Cidade"
            value={city}
            onChangeText={(city) => setCity(city)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Endereço"
            value={address}
            onChangeText={(address) => setAddress(address)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Telefone"
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            autoCapitalize="none"
          />
          <SignupFormTitle>
            <Text marginTop={dp(80)}>INFORMAÇÕES DE PERFIL</Text>
          </SignupFormTitle>
          <Input
            placeholder="Nome de usuário"
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <Input
            placeholder="Confirmação de senha"
            value={passwordConfirmation}
            onChangeText={(passwordConfirmation) =>
              setPasswordConfirmation(passwordConfirmation)
            }
            secureTextEntry={true}
          />
          <SignupFormTitle>
            <Text>FOTO DE PERFIL</Text>
          </SignupFormTitle>
          <ImageUploader
            id={uuid.v1()}
            folder="users"
            setImageUrl={setAvatarUrl}
          />
        </SignupFormContainer>

        <View
          style={{
            paddingTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            color={theme.colors.primary}
            onPress={handleSignup}
            styleTypho={{ color: '#434343' }}>
            FAZER CADASTRO
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
