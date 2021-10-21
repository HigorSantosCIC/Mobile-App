import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import useAuth from '../../../hooks/useAuth';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import { Divider, List } from 'react-native-paper';

const AddRoomScreen = ({ navigation }) => {
  const db = firebase.firestore();
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = [];
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          fetchUsers.push({ id: doc.id, ...doc.data() });
        });
        setUsers(fetchUsers);
      });
  }, []);

  const createRoom = (otherUser) => {
    const roomParams = {
      user1: user.uid,
      user1Name: user.fullName,
      user2: otherUser.id,
      user2Name: otherUser.fullName,
    };
    db.collection('rooms')
      .add(roomParams)
      .then((r) =>
        navigation.navigate('Room', {
          room: {
            id: r.id,
            ...roomParams,
          },
        }),
      )
      .catch(() => Alert.alert('Error ao criar sala'));
  };
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => createRoom(item)}>
            <List.Item
              title={item.fullName}
              description={item.city}
              titleNumberOfLines={1}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AddRoomScreen;