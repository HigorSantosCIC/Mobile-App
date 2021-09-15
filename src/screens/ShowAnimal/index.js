import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import api from '../../services/api';
import AnimalAdoption from '../../components/AnimalAdoption';
import firebase from 'firebase';
import { theme } from '../../constants/Theme';

const ShowAnimal = ({ animal }) => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = (animal.id) => {
    setLoading(true);
    api.Animals.show({ id })
      .then((r) => {
        setAnimals(r);
      })
      .finally(() => setLoading(false));
  };

  const adopt = (animal) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    if (!currentUserUID) {
      return Alert.alert('Você precisa está logado para adotar');
    }

    api.Animals.adopt(animal.item.id, currentUserUID)
      .then(() => Alert.alert('Animal adotado com sucesso'))
      .catch((e) => Alert.alert('Não foi possível adoptar', e))
      .finally(() => getAnimal(id));
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

export default ShowAnimal;
