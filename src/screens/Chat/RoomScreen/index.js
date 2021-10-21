import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';
import useAuth from '../../../hooks/useAuth';

const RoomScreen = ({ route }) => {
  const db = firebase.firestore();
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();

  console.log(user);
  // Set messages
  useEffect(() => {
    console.log(user);
    const messagesListener = db
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().name,
          })),
        ),
      );

    return () => messagesListener();
  }, []);

  const onSend = ([messages]) => {
    db.collection('messages').add(messages);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.uid,
        name: user.fullName
      }}
    />
  );
};

export default RoomScreen;
