import React, { useEffect, useState } from 'react';
import { Alert, Image, View, Text } from 'react-native';
import firebase from 'firebase';
import api from '../../services/api';
import { theme } from '../../constants/Theme';
import Button from '../../components/Button';
import { ButtonContainer } from './styles';
import Typography from '../../components/Typography';

const ShowAnimal = ({ route }) => {
  const { animal } = route.params;

  const [animalAddress, setAnimalAddress] = useState('');

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
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ height: '25%', width: '100%' }}
      />
      <View style={{ padding: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#f7a800' }}>NOME</Text>
          <Typography>{animal.name}</Typography>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#f7a800' }}>SEXO</Text>
            <Typography>{animal.sex}</Typography>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ color: '#f7a800' }}>PORTE</Text>
            <Typography>{animal.size}</Typography>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ color: '#f7a800' }}>IDADE</Text>
            <Typography>{animal.age}</Typography>
          </View>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#f7a800' }}>LOCALIZAÇÃO</Text>
          <Typography>{animalAddress}</Typography>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#f7a800' }}>SAÚDE</Text>
            <Typography>{animal.health}</Typography>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ color: '#f7a800' }}>DOENÇAS</Text>
            <Typography>{animal.disease}</Typography>
          </View>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#f7a800' }}>TEMPERAMENTO</Text>
          <Typography>{animal.mood}</Typography>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#f7a800' }}>NECESSIDADES DE ADOÇAO</Text>
          <Typography>{animal.adoptionNeeds}</Typography>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#f7a800' }}>SOBRE</Text>
          <Typography>{animal.descriptrion}</Typography>
        </View>

        <ButtonContainer>
          <Button
            color={theme.colors.secondary}
            onPress={() => adoptRequest(animal)}
            styleTypho={{ color: '#434343' }}>
            PRETENDO ADOTAR
          </Button>
        </ButtonContainer>
      </View>
    </View>
  );
};

export default ShowAnimal;
