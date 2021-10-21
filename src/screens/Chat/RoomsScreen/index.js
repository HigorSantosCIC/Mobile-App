import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import firebase from 'firebase';
import useAuth from '../../../hooks/useAuth';
import { Divider, List } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

const RoomsScreen = ({ navigation }) => {
  const db = firebase.firestore();
  const { user } = useAuth();
  const [rooms, setRooms] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      db.collection('rooms')
        .where('user1', '==', user.uid)
        .get()
        .then((querySnapshot) => {
          let fetchRooms = [];
          querySnapshot.forEach((doc) => {
            fetchRooms.push({ id: doc.id, ...doc.data() });
          });
          setRooms((prevState) => [...prevState, ...fetchRooms]);
        });

      db.collection('rooms')
        .where('user2', '==', user.uid)
        .get()
        .then((querySnapshot) => {
          let fetchRooms = [];
          querySnapshot.forEach((doc) => {
            fetchRooms.push({ id: doc.id, ...doc.data() });
          });
          setRooms((prevState) => [...prevState, ...fetchRooms]);
        });
      return () => setRooms([]);
    }, []),
  );

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Room', { room: item })}>
            <List.Item
              title={
                item.user1Name === user.fullName ? item.user2Name : item.user1Name
              }
              // description={item.latestMessage.text}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    color: 'black',
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
