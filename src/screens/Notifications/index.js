import React, { useState } from 'react';
import api from '../../services/api';
import firebase from 'firebase';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from '../../constants/Theme';
import Typography from '../../components/Typography';
import { useFocusEffect } from '@react-navigation/native';

const NotificationItem = (notification, refreshFunction) => {
  const handleOnPress = () => {
    if (notification.readed) {
      return;
    }
    if (notification.type === 'adoptionRequest') {
      Alert.alert(
        'Você deseja adotar seu animal',
        'Essa ação não pode ser desfeita',
        [
          {
            text: 'Aceitar',
            onPress: () => {
              api.Notifications.updateReaded(notification.id);
              api.AdoptionRequest.accept(notification.resourceId)
                .then(() =>
                  Alert.alert('Parabéns seu animal foi adotado som sucesso'),
                )
                .catch(() => Alert.alert('Error ao aceitar solicitação'))
                .finally(() => refreshFunction());
            },
          },
          {
            text: 'Rejeitar',
            onPress: () => {
              api.Notifications.updateReaded(notification.id);
              api.AdoptionRequest.reject(notification.resourceId)
                .then(() => Alert.alert('Pedido realizado com sucesso'))
                .catch(() => Alert.alert('Error ao rejeitar solicitação'))
                .finally(() => refreshFunction());
            },
          },
          {
            text: 'Sair',
            onPress: () => {},
          },
        ],
      );
    }
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View
        style={{
          height: 60,
          borderBottomWidth: 1,
          borderColor: 'gray',
          paddingHorizontal: 5,
          justifyContent: 'center',
          backgroundColor: notification.readed ? '#ddd' : 'white',
        }}>
        <Typography style={{ fontSize: 16 }}>{notification.title}</Typography>
        <Typography style={{ fontSize: 12, paddingTop: 5, color: 'gray' }}>
          {notification.body}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

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
        renderItem={(notification) =>
          NotificationItem(notification.item, fetchNotifications)
        }
        ListEmptyComponent={() => (
          <Typography>Você não possui notificações</Typography>
        )}
      />
    </View>
  );
};

export default Notifications;
