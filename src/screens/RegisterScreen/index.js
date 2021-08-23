import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import React, { useState } from 'react';

import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';
import {
  TextContainer,
  ButtonContainer,
  IconContainer,
  ViewContainer,
} from './styles';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SelectOption from '../../components/SelectOption';
import { AntDesign } from '@expo/vector-icons';
import { dataIdade, dataPorte, dataSexo, dataEspecie } from '../ArraySelect';

const RegisterScreen = () => {
  const onPressAdocao = () => {
    setFluxo('ADOÇÃO');
    console.log('ADOCAO');
  };

  const [fluxo, setFluxo] = useState('ADOÇÃO');

  return (
    <ScrollView>
      <TextContainer>
        <Text
          style={{
            color: 'black',
            fontSize: dp(14),
            flexGrow: 1,
            borderRadius: dp(5),
            padding: dp(8),
          }}>
          Tenho interesse em cadastrar o animal para:
        </Text>
      </TextContainer>
      <ButtonContainer>
        <Button
          style={{ borderRadius: dp(2) }}
          color={theme.colors.secundary}
          onPress={onPressAdocao}
          styleTypho={{ color: '#434343' }}>
          ADOÇÃO
        </Button>
      </ButtonContainer>
      <Text
        style={{
          fontSize: dp(16),
          color: '#434343',
          paddingTop: dp(16),
          paddingLeft: dp(24),
        }}>
        {fluxo}
      </Text>
      <View style={{ marginTop: dp(24), paddingLeft: dp(24) }}>
        <Text> NOME DO ANIMAL</Text>
        <Input
          style={{ paddingTop: dp(10), paddingLeft: dp(24) }}
          placeholder="Nome do animal"
        />
      </View>
      <View
        style={{
          paddingTop: dp(24),
          paddingBottom: dp(24),
          paddingLeft: dp(24),
        }}>
        <Text> FOTOS DO ANIMAL</Text>
      </View>
      {/* Botao de adicionar fotos */}
      <TouchableHighlight onPress={() => console.log('testando rsrs')}>
        <ViewContainer>
          <View style={{ height: dp(128), width: dp(312) }}>
            <IconContainer style={{ paddingTop: dp(44), paddingBottom: dp(48) }}>
              <AntDesign name="pluscircleo" size={24} color="black" />
              <Text> adicionar fotos</Text>
            </IconContainer>
          </View>
        </ViewContainer>
      </TouchableHighlight>

      <View
        style={{
          paddingTop: dp(20),
          paddingLeft: dp(24),
        }}>
        <Text style={{ color: '#f7a800' }}> ESPECIE </Text>
        <SelectOption radioButtonsData={dataEspecie} />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> SEXO </Text>
        <SelectOption radioButtonsData={dataSexo} />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> PORTE </Text>
        <SelectOption radioButtonsData={dataPorte} />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> IDADE </Text>
        <SelectOption radioButtonsData={dataIdade} />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> TEMPERAMENTO </Text>

        <CheckBox text="Brincalhao" />
        <CheckBox text="Timido" />
        <CheckBox text="Calmo" />
        <CheckBox text="Guarda " />
        <CheckBox text="Amoroso " />
        <CheckBox text="Preguicoso " />
      </View>
      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> SAUDE </Text>

        <CheckBox text="Vacinado" />
        <CheckBox text="Vermifugado" />
        <CheckBox text="Castrado" />
        <CheckBox text="Doente" />
      </View>
      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Input placeholder="DOENCA DO ANIMAL" />
      </View>
      <View style={{ paddingTop: dp(20), paddingLeft: dp(24), width: '100%' }}>
        <Text style={{ color: '#f7a800' }}> EXIGENCIAS PARA ADOCAO </Text>

        <CheckBox text="TERMOS DE ADOCAO" />
        <CheckBox text="FOTOS DA CASA" />
        <CheckBox text="VISITA PREVIA AO ANIMAL" />
        <CheckBox text="ACOMPANHAMENTO POS ADOCAO" />
      </View>
      <Text style={{ paddingLeft: dp(24), paddingTop: dp(24) }}>
        SOBRE O ANIMAL
      </Text>
      <Input
        placeholder="Compartilhar a historia do animal"
        style={{ paddingLeft: dp(24), paddingTop: dp(24) }}
      />
      <ButtonContainer>
        <Button
          color={theme.colors.secundary}
          onPress={() => console.log('next page')}
          styleTypho={{ color: '#434343' }}>
          COLOCAR PARA ADOCAO
        </Button>
      </ButtonContainer>
    </ScrollView>
  );
};

export default RegisterScreen;
