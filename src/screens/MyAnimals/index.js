import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import firebase from 'firebase';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { theme } from '../../constants/Theme';
import AnimalAdoption from '../../components/AnimalAdoption';
import Typography from '../../components/Typography';

const MyAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = () => {
    setLoading(true);
    api.Animals.myAnimals({ currentUserId: firebase.auth().currentUser.uid })
      .then((r) => {
        setAnimals(r);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      {loading && <ActivityIndicator size="large" color={theme.colors.primary} />}
      <FlatList
        style={{ flexGrow: 1 }}
        data={animals}
        renderItem={(animal) => {
          return <AnimalAdoption {...animal.item} key={animal.index} />;
        }}
        ListEmptyComponent={() => (
          <Typography>Você não possui animais cadastrados ou adotados</Typography>
        )}
      />
    </View>
  );
};

export default MyAnimals;
