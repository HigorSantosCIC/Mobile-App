import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import useAuth from '../../../hooks/useAuth';
import { Divider, List } from 'react-native-paper';

const RoomsScreen = ({ navigation }) => {
  const db = firebase.firestore();
  const { user } = useAuth();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Get users rooms
    let fetchRooms = [];
    db.collection('rooms')
      .where('user1', '==', user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          fetchRooms.append(doc.data());
        });
      });
    db.collection('rooms')
      .where('user2', '==', user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          fetchRooms.append(doc.data());
        });
      });
    setRooms(fetchRooms);
  });

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Room', { room: item })}>
            <List.Item
              title={item.name}
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
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
