import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View, Text } from 'react-native';
import firebase from 'firebase';
import api from '../../services/api';
import { theme } from '../../constants/Theme';
import Button from '../../components/Button';
import { ButtonContainer } from './styles';
import Typography from '../../components/Typography';

const ShowAnimal = ({ route, navigation }) => {
  const { animal } = route.params;

  const [animalAddress, setAnimalAddress] = useState('');

  useEffect(() => {
    api.Users.getAddress(animal.owner_id).then((ownerAddress) =>
      setAnimalAddress(ownerAddress),
    );
  }, []);

  const adoptRequest = (animal) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    if (!currentUserUID) {
      return Alert.alert('Você precisa está logado para adotar');
    }
    api.AdoptionRequest.create(animal.id, animal.owner_id, currentUserUID)
      .then(() => Alert.alert('Foi requisitado a adoção para o dono'))
      .catch(() => Alert.alert('Não foi possível requisitar a adoção'));
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <ActivityIndicator size="large" color={theme.colors.primary} />

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
          onPress={() => adoptRequest(animal)}
          styleTypho={{ color: '#434343' }}>
          PRETENDO ADOTAR
        </Button>
      </ButtonContainer>
    </View>
  );
};

export default ShowAnimal;
