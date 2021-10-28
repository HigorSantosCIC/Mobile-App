import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import useAuth from '../../../hooks/useAuth';
import { Alert, FlatList, View } from 'react-native';
import { Divider } from 'react-native-paper';
import ChatUserItem from '../../../components/ChatUserItem';

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
          <ChatUserItem
            user={item}
            onPress={() => createRoom(item)}></ChatUserItem>
        )}
      />
    </View>
  );
};

export default AddRoomScreen;
