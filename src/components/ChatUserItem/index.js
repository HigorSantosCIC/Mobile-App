import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Typography from '../Typography';
import { View, TouchableOpacity, Image } from 'react-native';
import { getUserImageUrl } from '../../utils/images';
import { theme } from '../../constants/Theme';

const ChatUserItem = ({ user, onPress }) => {
  const [userImage, setUserImage] = useState(null);

  useEffect(async () => {
    console.log(await getUserImageUrl(userImage));
    // getUserImageUrl(userImage).then((r) => setUserImage(r));
  }, [user]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <View style={{ borderRadius: 48 }}>
          {!!userImage && (
            <Image
              source={{
                uri: userImage,
              }}
            />
          )}
        </View>
        <View>
          <Typography style={{ color: theme.colors.primary, fontSize: 12 }}>
            {user.fullName}
          </Typography>
          <Typography>{user.city}</Typography>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default ChatUserItem;
