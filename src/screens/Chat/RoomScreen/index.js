import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';

const RoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userImage, setUserImage] = useState(null);
  const currentUser = firebase.auth().currentUser;

  // set user photo
  useEffect(() => {
    if (user) {
      getImage();
    }
  }, [user]);

  // Set messages
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
        name: currentUser.displayName,

      }}
    />
  );
};

export default RoomScreen;
