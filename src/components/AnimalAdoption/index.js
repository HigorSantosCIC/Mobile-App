import React from 'react';
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

const AnimalAdoption = ({ name, sexo, idade, porte, picture, place }) => {
  return (
    <Container>
      <Header>
        <Typography>{name}</Typography>
        <FontAwesome name="heart" size={24} color="#000000" />
      </Header>

      <Image
        source={{ uri: picture }}
        style={{ height: dp(183), width: '100%' }}
      />

      <FooterInfo>
        <FooterTypography>{sexo}</FooterTypography>
        <FooterTypography>{idade}</FooterTypography>
        <FooterTypography>{porte}</FooterTypography>
      </FooterInfo>
      <FooterCityContainer>
        <FooterTypography>{place}</FooterTypography>
      </FooterCityContainer>
    </Container>
  );
};

export default AnimalAdoption;
