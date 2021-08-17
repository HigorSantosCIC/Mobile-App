import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import React, { useState } from 'react';

import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';
import {
  TextContainer,
  ButtonContainer,
  IconContainer,
  ViewContainer,
  CheckContainer,
} from './styles';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SelectOption from '../../components/SelectOption';
import { AntDesign } from '@expo/vector-icons';
import { dataIdade, dataPorte, dataSexo, dataEspecie } from './ArraySelect';

const RegisterScreen = () => {
  const onPressAdocao = () => {
    console.log('ADOCAO');
  };
  const onPressApadrinhar = () => {
    console.log('APADRINHAR');
  };
  const onPressAjuda = () => {
    console.log('AJUDA');
  };

  const Adocao = () => {
    return (
      <ScrollView>
        <TextContainer>
          <Text style={{ color: 'black', fontSize: dp(14) }}>
            Tenho interesse em cadastrar o animal para:{' '}
          </Text>
        </TextContainer>

        <ButtonContainer style={{ paddingTop: dp(30) }}>
          <Button
            color={theme.colors.secundary}
            onPress={onPressAdocao}
            styleTypho={{ color: '#434343' }}>
            ADOÇÃO
          </Button>

          <View style={{ paddingTop: dp(30) }}>
            <Button
              color={theme.colors.secundary}
              onPress={onPressApadrinhar}
              styleTypho={{ color: '#434343' }}>
              APADRINHAR
            </Button>

            <View style={{ paddingTop: dp(30) }}>
              <Button
                color={theme.colors.secundary}
                onPress={onPressAjuda}
                styleTypho={{ color: '#434343' }}>
                AJUDA
              </Button>
            </View>
          </View>
        </ButtonContainer>

        <Text style={{ fontSize: dp(16), color: '#434343' }}> Adoção </Text>

        <View style={{ paddingTop: dp(24) }}>
          <Text> NOME DO ANIMAL</Text>
          <Input placeholder="Nome do animal" />
        </View>

        <View style={{ paddingTop: dp(24), paddingBottom: dp(24) }}>
          <Text> FOTOS DO ANIMAL</Text>
        </View>
        {/* Botao de adicionar fotos */}
        <TouchableHighlight onPress={() => console.log('testando rsrs')}>
          <ViewContainer>
            <View style={{ height: dp(128), width: dp(312) }}>
              <IconContainer
                style={{ paddingTop: dp(44), paddingBottom: dp(48) }}>
                <AntDesign name="pluscircleo" size={24} color="black" />
                <Text> adicionar fotos</Text>
              </IconContainer>
            </View>
          </ViewContainer>
        </TouchableHighlight>

        <View style={{ paddingTop: dp(20) }}>
          <Text style={{ color: '#f7a800' }}> ESPECIE </Text>
          <SelectOption radioButtonsData={dataEspecie} />
        </View>

        <View style={{ paddingTop: dp(20) }}>
          <Text style={{ color: '#f7a800' }}> SEXO </Text>
          <SelectOption radioButtonsData={dataSexo} />
        </View>

        <View style={{ paddingTop: dp(20) }}>
          <Text style={{ color: '#f7a800' }}> PORTE </Text>
          <SelectOption radioButtonsData={dataPorte} />
        </View>

        <View style={{ paddingTop: dp(20) }}>
          <Text style={{ color: '#f7a800' }}> IDADE </Text>
          <SelectOption radioButtonsData={dataIdade} />
        </View>

        <View style={{ paddingTop: dp(20) }}>
          <Text style={{ color: '#f7a800' }}> TEMPERAMENTO </Text>
          <CheckContainer>
            <CheckBox text="Brincalhao" />
            <CheckBox text="Timido" />
            <CheckBox text="Calmo" />
            <CheckBox text="Guarda " />
            <CheckBox text="Amoroso " />
            <CheckBox text="Preguicoso " />
          </CheckContainer>
        </View>

        <View style={{ paddingTop: dp(20) }}>
          <Text style={{ color: '#f7a800' }}> SAUDE </Text>
          <CheckContainer>
            <CheckBox text="Vacinado" />
            <CheckBox text="Vermifugado" />
            <CheckBox text="Castrado" />
            <CheckBox text="Doente" />
          </CheckContainer>
        </View>

        <View style={{ paddingTop: dp(20), paddingLeft: dp(20) }}>
          <Input placeholder="DOENCA DO ANIMAL" />
        </View>

        <View style={{ paddingTop: dp(20) }}>
          <Text style={{ color: '#f7a800' }}> EXIGENCIAS PARA ADOCAO </Text>
          <CheckContainer>
            <CheckBox text="TERMOS DE ADOCAO" />
            <CheckBox text="FOTOS DA CASA" />
            <CheckBox text="VISITA PREVIA AO ANIMAL" />
            <CheckBox text="ACOMPANHAMENTO POS ADOCAO" />
          </CheckContainer>
        </View>
      </ScrollView>
    );
  };

  return <Adocao />;
};

export default RegisterScreen;
