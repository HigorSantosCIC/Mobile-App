import { FlatList, View } from 'react-native';
import React, { useState } from 'react';
import firebase from 'firebase';
import useAuth from '../../../hooks/useAuth';
import { Divider } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import ChatUserItem from '../../../components/ChatUserItem';

const RoomsScreen = ({ navigation }) => {
  const db = firebase.firestore();
  const { user } = useAuth();
  const [rooms, setRooms] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      db.collection('rooms')
        .where('user1Id', '==', user.uid)
        .get()
        .then((querySnapshot) => {
          let fetchRooms = [];
          querySnapshot.forEach((doc) => {
            fetchRooms.push({ id: doc.id, ...doc.data() });
          });
          setRooms((prevState) => [...prevState, ...fetchRooms]);
        });

      db.collection('rooms')
        .where('user2Id', '==', user.uid)
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
          <ChatUserItem
            user={item.user1.userName === user.userName ? item.user2 : item.user1}
            onPress={() => navigation.navigate('Room', { room: item })}
          />
        )}
      />
    </View>
  );
};

export default RoomsScreen;
