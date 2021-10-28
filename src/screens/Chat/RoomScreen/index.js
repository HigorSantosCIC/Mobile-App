import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';
import useAuth from '../../../hooks/useAuth';

const RoomScreen = ({ route }) => {
  const db = firebase.firestore();
  const [messages, setMessages] = useState([]);
  const { room } = route.params;
  const { user } = useAuth();

  // Set messages
  useEffect(() => {
    const messagesListener = db
      .collection('messages')
      .where('roomId', '==', room.id)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          })),
        ),
      );

    return () => messagesListener();
  }, []);

  const onSend = ([messages]) => {
    db.collection('messages').add({ roomId: room.id, ...messages });
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.uid,
        name: user?.fullName,
        avatar: user?.avatarUrl,
      }}
    />
  );
};

export default RoomScreen;
