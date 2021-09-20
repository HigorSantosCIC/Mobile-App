import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View, Text } from 'react-native';
import firebase from 'firebase';
import api from '../../services/api';
import { theme } from '../../constants/Theme';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { TextContainer, ButtonContainer } from './styles';

const ShowAnimal = ({ animal }) => {
  console.log(animal);
  const [animalAddress, setAnimalAdress] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    setAnimalAdress(api.Users.getAdress(animal.owner));
  }, []);

  const handleAdoption = () => {
    setCurrentUser(firebase.auth().currentUser.uid);

    if (!currentUser) {
      return Alert.alert('Você precisa estar logado para adotar');
    }

    api.Animals.adopt(animal.id, currentUser)
      .then(() => Alert.alert('Animal adotado com sucesso'))
      .catch((e) => Alert.alert('Não foi possível adotar', e))
      .finally(() => navigation.navigate('MyAnimals'));
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text>{animal.name}</Text>
      <Text>{animal.sex}</Text>
      <Text>{animal.age}</Text>
      <Text>{animalAddress}</Text>
      <Text>{animal.health}</Text>
      <Text>{animal.disease}</Text>
      <Text>{animal.mood}</Text>
      <Text>{animal.adoptionNeeds}</Text>
      <Text>{animal.descriptrion}</Text>
      <ButtonContainer>
        <Button
          color={theme.colors.secondary}
          onPress={() => handleAdoption}
          styleTypho={{ color: '#434343' }}>
          pretendo adotar
        </Button>
      </ButtonContainer>
    </View>
  );
};

export default ShowAnimal;
