import React, { useState, useEffect } from 'react';
import {
  Container,
  FooterCityContainer,
  FooterInfo,
  FooterTypography,
  Header,
} from './styles';
import Typography from '../Typography';
import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'react-native';
import { dp } from '../../constants/Spacing';
import firebase from 'firebase';

const AnimalAdoption = ({ name, sex, age, size, place }) => {
  const [imageUrl, setImageUrl] = useState('');

  const getImage = async () => {
    const ref = firebase.storage().ref().child(`images/animals/${name}`);
    const remoteURL = await ref.getDownloadURL();
    setImageUrl(remoteURL);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Container>
      <Header>
        <Typography>{name}</Typography>
        <FontAwesome name="heart" size={24} color="#000000" />
      </Header>

      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ height: dp(183), width: '100%' }}
      />

      <FooterInfo>
        <FooterTypography>{sex}</FooterTypography>
        <FooterTypography>{age}</FooterTypography>
        <FooterTypography>{size}</FooterTypography>
      </FooterInfo>
      <FooterCityContainer>
        <FooterTypography>{place}</FooterTypography>
      </FooterCityContainer>
    </Container>
  );
};

export default AnimalAdoption;
