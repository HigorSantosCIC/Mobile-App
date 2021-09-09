import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { IconContainer, ViewContainer } from './styles';
import firebase from 'firebase';
import { dp } from '../../constants/Spacing';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ImageUploader = ({ id, folder }) => {
  async function UploadImage(id, folder) {
    console.log('oi');
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
    const ref = firebase.storage().ref().child(`images/${folder}/${id}`);

    const snapshot = await ref.put(blob, { contentType: 'image/png' });
    const remoteURL = await snapshot.ref.getDownloadURL();
    return remoteURL;
  }
  return (
    <View>
      <TouchableHighlight onPress={() => UploadImage(id, folder)}>
        <ViewContainer>
          <View style={{ height: dp(128), width: dp(312) }}>
            <IconContainer style={{ paddingTop: dp(44), paddingBottom: dp(48) }}>
              <AntDesign name="pluscircleo" size={24} color="black" />
              <Text> Adicionar fotos</Text>
            </IconContainer>
          </View>
        </ViewContainer>
      </TouchableHighlight>
    </View>
  );
};

export default ImageUploader;
