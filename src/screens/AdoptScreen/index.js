import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import AnimalAdoption from '../../components/AnimalAdoption';
import { theme } from '../../constants/Theme';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const AdoptScreen = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = () => {
    setLoading(true);
    api.Animals.all({ isAdopted: false })
      .then((r) => {
        setAnimals(r);
      })
      .finally(() => setLoading(false));
  };

  const adoptRequest = (animal) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    if (!currentUserUID) {
      return Alert.alert('Você precisa está logado para adotar');
    }
    api.AdoptionRequest.create(
      animal.item.id,
      animal.item.owner_id,
      currentUserUID,
    )
      .then(() => Alert.alert('Foi requisitado a adoção para o dono'))
      .catch(() => Alert.alert('Não foi possível requisitar a adoção'));
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      {loading && <ActivityIndicator size="large" color={theme.colors.primary} />}
      <FlatList
        data={animals}
        renderItem={(animal) => {
          return (
            <TouchableOpacity
              onPress={() => {
                adoptRequest(animal);
                navigation.navigate('ShowAnimal', { animal: animal.item });
              }}>
              <AnimalAdoption {...animal.item} key={animal.index} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default AdoptScreen;
