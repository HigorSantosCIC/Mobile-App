import {
  ActivityIndicator,
  Alert,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import AnimalAdoption from '../../components/AnimalAdoption';
import firebase from 'firebase';
import { theme } from '../../constants/Theme';

const AdoptScreen = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const adopt = (animal) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    console.log(currentUserUID);
    if (!currentUserUID) {
      return Alert.alert('Você precisa está logado para adotar');
    }

    api.Animals.adopt(animal.item.id, currentUserUID)
      .then(() => Alert.alert('Animal adotado com sucesso'))
      .catch((e) => Alert.alert('Não foi possível adoptar', e))
      .finally(() => fetchAnimals());
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
                adopt(animal);
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
