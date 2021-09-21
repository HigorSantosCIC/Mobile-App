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

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      {loading && <ActivityIndicator size="large" color={theme.colors.primary} />}
      <FlatList
        data={animals}
        renderItem={(animal) => {
          return (
            <TouchableOpacity
              onPress={() => {
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
