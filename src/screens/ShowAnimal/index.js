import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import firebase from 'firebase';
import api from '../../services/api';
import { theme } from '../../constants/Theme';
import Button from '../../components/Button';
import { ButtonContainer } from './styles';
import Typography from '../../components/Typography';

const ShowAnimal = ({ route, navigation }) => {
  const { animal } = route.params;

  const [animalAddress, setAnimalAddress] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api.Users.getAddress(animal.owner_id).then((ownerAddress) =>
      setAnimalAddress(ownerAddress),
    );
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
      <Typography>{animal.name}</Typography>
      <Typography>{animal.sex}</Typography>
      <Typography>{animal.age}</Typography>
      <Typography>{animalAddress}</Typography>
      <Typography>{animal.health}</Typography>
      <Typography>{animal.disease}</Typography>
      <Typography>{animal.mood}</Typography>
      <Typography>{animal.adoptionNeeds}</Typography>
      <Typography>{animal.descriptrion}</Typography>
      <ButtonContainer>
        <Button
          color={theme.colors.secondary}
          onPress={() => handleAdoption}
          styleTypho={{ color: '#434343' }}>
          PRETENDO ADOTAR
        </Button>
      </ButtonContainer>
    </View>
  );
};

export default ShowAnimal;
