import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import AnimalAdoption from '../../components/AnimalAdoption';

const AdoptScreen = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    api.Animals.all().then((r) => {
      setAnimals(r);
    });
  }, []);

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <FlatList
        data={animals}
        renderItem={(animal) => {
          return <AnimalAdoption {...animal.item} key={animal.index} />;
        }}
      />
    </View>
  );
};

export default AdoptScreen;
