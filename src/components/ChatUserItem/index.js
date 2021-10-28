import React from 'react';
import { Container } from './styles';
import Typography from '../Typography';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../constants/Theme';
import blankPicture from '../../../assets/blank-profile-picture.png';

const ChatUserItem = ({ user, onPress }) => {
  const imageSource = () =>
    user.avatarUrl ? { uri: user.avatarUrl } : blankPicture;

  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <View>
          <Image
            source={imageSource()}
            style={{
              width: 48,
              height: 48,
              borderRadius: 48 / 2,
              overflow: 'hidden',
            }}
          />
        </View>
        <View style={{ paddingLeft: 16 }}>
          <Typography style={{ color: theme.colors.primary, fontSize: 16 }}>
            {user.fullName.toUpperCase()}
          </Typography>
          <Typography style={{ color: '#bdbdbd', fontSize: 14, paddingTop: 2 }}>
            {user.city}
          </Typography>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default ChatUserItem;
