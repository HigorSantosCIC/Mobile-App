import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, View, Text } from 'react-native';
import firebase from 'firebase';
import api from '../../services/api';
import { theme } from '../../constants/Theme';
import Button from '../../components/Button';
import { ButtonContainer } from './styles';
import Typography from '../../components/Typography';
import { dp } from '../../constants/Spacing';

const ShowAnimal = ({ route, navigation }) => {
  const { animal } = route.params;

  const [animalAddress, setAnimalAddress] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const [imageUrl, setImageUrl] = useState('');

  const getImage = async () => {
    const ref = firebase.storage().ref().child(`images/animals/${animal.name}`);
    const remoteURL = await ref.getDownloadURL();
    setImageUrl(remoteURL);
  };

  useEffect(() => {
    getImage();
  }, []);

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

      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ height: dp(183), width: '100%' }}
      />

      <Text style={{ color: '#f7a800' }}>NOME</Text>
      <Typography>{animal.name}</Typography>

      <Text style={{ color: '#f7a800' }}>SEXO</Text>
      <Typography>{animal.sex}</Typography>

      <Text style={{ color: '#f7a800' }}>PORTE</Text>
      <Typography>{animal.size}</Typography>

      <Text style={{ color: '#f7a800' }}>IDADE</Text>
      <Typography>{animal.age}</Typography>

      <Text style={{ color: '#f7a800' }}>LOCALIZAÇÃO</Text>
      <Typography>{animalAddress}</Typography>

      <Text style={{ color: '#f7a800' }}>SAÚDE</Text>
      <Typography>{animal.health}</Typography>

      <Text style={{ color: '#f7a800' }}>DOENÇAS</Text>
      <Typography>{animal.disease}</Typography>

      <Text style={{ color: '#f7a800' }}>TEMPERAMENTO</Text>
      <Typography>{animal.mood}</Typography>

      <Text style={{ color: '#f7a800' }}>NECESSIDADES DE ADOÇAO</Text>
      <Typography>{animal.adoptionNeeds}</Typography>

      <Text style={{ color: '#f7a800' }}>SOBRE</Text>
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
