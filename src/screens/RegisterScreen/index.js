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
import { dataIdade, dataPorte, dataSexo, dataEspecie } from './utils/select';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [sex, setSex] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [mood, setMood] = useState([]);
  const [health, setHealth] = useState('[]');
  const [disease, setDisease] = useState('');
  const [adoptionNeeds, setAdoptionNeeds] = useState([]);
  const [description, setDescription] = useState('');

  const handleRegister = () => {
    api.Animals.create(
      name,
      species,
      sex,
      size,
      age,
      mood,
      health,
      disease,
      adoptionNeeds,
      description,
    ).then(() => navigation.push('Dashboard'));
  };

  const UpdateMood = (word, status) => {
    let aux;
    if (status == 'checked') {
      aux = mood;
      aux.push(word);
      setMood(aux);
    } else {
      aux = mood;
      aux.splice(aux.indexOf(word), 1);
      setMood(aux);
    }
  };

  const UpdateHealth = (word, status) => {
    let aux;
    if (status == 'checked') {
      aux = health;
      aux.push(word);
      setHealth(aux);
    } else {
      aux = health;
      aux.splice(aux.indexOf(word), 1);
      setHealth(aux);
    }
  };

  const UpdateAdoptionNeeds = (word, status) => {
    let aux;
    if (status == 'checked') {
      aux = adoptionNeeds;
      aux.push(word);
      setAdoptionNeeds(aux);
    } else {
      aux = adoptionNeeds;
      aux.splice(aux.indexOf(word), 1);
      setAdoptionNeeds(aux);
    }
  };

  const [id, setId] = useState(0);

  const onPressAdocao = () => {
    setFluxo('ADOÇÃO');
  };

  async function UploadScreen() {
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', pickerResult.uri, true);
      xhr.send(null);
    });
    const ref = firebase.storage().ref().child(`images/${id}`);
    setId(id + 1);
    const snapshot = await ref.put(blob, { contentType: 'image/png' });
    const remoteURL = await snapshot.ref.getDownloadURL();
    return remoteURL;
  }

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
          color={theme.colors.secondary}
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
          value={name}
          onChangeText={(name) => setName(name)}
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
      <TouchableHighlight onPress={UploadScreen}>
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
        <SelectOption
          radioButtonsData={dataEspecie}
          onPress={() => setSpecies(dataEspecie.label)}
        />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> SEXO </Text>
        <SelectOption
          radioButtonsData={dataSexo}
          onPress={() => setSex(dataSexo.label)}
        />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> PORTE </Text>
        <SelectOption
          radioButtonsData={dataPorte}
          onPress={() => setSize(dataPorte.label)}
        />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> IDADE </Text>
        <SelectOption
          radioButtonsData={dataIdade}
          onPress={() => setAge(dataIdade.label)}
        />
      </View>

      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> TEMPERAMENTO </Text>

        <CheckBox
          text="Brincalhao"
          onPress={() => UpdateMood(this.text, this.status)}
        />
        <CheckBox
          text="Timido"
          onPress={() => UpdateMood(this.text, this.status)}
        />
        <CheckBox
          text="Calmo"
          onPress={() => UpdateMood(this.text, this.status)}
        />
        <CheckBox
          text="Guarda "
          onPress={() => UpdateMood(this.text, this.status)}
        />
        <CheckBox
          text="Amoroso "
          onPress={() => UpdateMood(this.text, this.status)}
        />
        <CheckBox
          text="Preguicoso "
          onPress={() => UpdateMood(this.text, this.status)}
        />
      </View>
      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Text style={{ color: '#f7a800' }}> SAUDE </Text>

        <CheckBox
          text="Vacinado"
          onPress={() => UpdateHealth(this.text, this.status)}
        />
        <CheckBox
          text="Vermifugado"
          onPress={() => UpdateHealth(this.text, this.status)}
        />
        <CheckBox
          text="Castrado"
          onPress={() => UpdateHealth(this.text, this.status)}
        />
        <CheckBox
          text="Doente"
          onPress={() => UpdateHealth(this.text, this.status)}
        />
      </View>
      <View style={{ paddingTop: dp(20), paddingLeft: dp(24) }}>
        <Input
          placeholder="DOENCA DO ANIMAL"
          value={disease}
          onChangeText={(disease) => setDisease(disease)}
        />
      </View>
      <View style={{ paddingTop: dp(20), paddingLeft: dp(24), width: '100%' }}>
        <Text style={{ color: '#f7a800' }}> EXIGENCIAS PARA ADOCAO </Text>

        <CheckBox
          text="TERMOS DE ADOCAO"
          onPress={() => UpdateAdoptionNeeds(this.text, this.status)}
        />
        <CheckBox
          text="FOTOS DA CASA"
          onPress={() => UpdateAdoptionNeeds(this.text, this.status)}
        />
        <CheckBox
          text="VISITA PREVIA AO ANIMAL"
          onPress={() => UpdateAdoptionNeeds(this.text, this.status)}
        />
        <CheckBox
          text="ACOMPANHAMENTO POS ADOCAO"
          onPress={() => UpdateAdoptionNeeds(this.text, this.status)}
        />
      </View>
      <Text style={{ paddingLeft: dp(24), paddingTop: dp(24) }}>
        SOBRE O ANIMAL
      </Text>
      <Input
        placeholder="Compartilhar a historia do animal"
        style={{ paddingLeft: dp(24), paddingTop: dp(24) }}
        value={description}
        onChangeText={(description) => setDescription(description)}
      />
      <ButtonContainer>
        <Button
          color={theme.colors.secondary}
          onPress={() => handleRegister}
          styleTypho={{ color: '#434343' }}>
          COLOCAR PARA ADOCAO
        </Button>
      </ButtonContainer>
    </ScrollView>
  );
};

export default RegisterScreen;
