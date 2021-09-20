import React, { useState } from 'react';
import api from '../../services/api';
import firebase from 'firebase';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { theme } from '../../constants/Theme';
import Typography from '../../components/Typography';
import { useFocusEffect } from '@react-navigation/native';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      fetchNotifications();
    }, []),
  );

  const fetchNotifications = () => {
    setLoading(true);
    api.Notifications.myNotifications({
      currentUserId: firebase.auth().currentUser.uid,
    })
      .then((r) => {
        setNotifications(r);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
      {loading && <ActivityIndicator size="large" color={theme.colors.primary} />}
      <FlatList
        style={{ flexGrow: 1 }}
        data={notifications}
        renderItem={(notification) => {
          return <Typography>{notification.item.title}</Typography>;
        }}
        ListEmptyComponent={() => (
          <Typography>Você não possui notificações</Typography>
        )}
      />
    </View>
  );
};

export default Notifications;
