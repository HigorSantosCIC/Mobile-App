import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import React, { useState } from 'react';
import { Button, Image, TouchableHighlight, View } from 'react-native';
import { dp } from '../../constants/Spacing';
import { ViewContainer } from './styles';

const ImageUploader = ({ id, folder }) => {
  const [pickedImagePath, setPickedImagePath] = useState('');

  async function openGaleria(id, folder) {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted == false) {
      alert('Permissao para camera recusada.');
    }

    const result = await ImagePicker.launchCameraAsync();
    console.log(result);
    setPickedImagePath(result.uri);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.responseType = 'blob';
      xhr.open('GET', result.uri, true);
      xhr.send(null);
    });
    const ref = firebase.storage().ref().child(`images/${folder}/${id}`);

    const snapshot = await ref.put(blob, { contentType: 'image/png' });
    const remoteURL = await snapshot.ref.getDownloadURL();
    return remoteURL;
  }

  async function openCamera(id, folder) {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permissoes insuficientes para escolher foto.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
    setPickedImagePath(result.uri);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.responseType = 'blob';
      xhr.open('GET', result.uri, true);
      xhr.send(null);
    });
    const ref = firebase.storage().ref().child(`images/${folder}/${id}`);

    const snapshot = await ref.put(blob, { contentType: 'image/png' });
    const remoteURL = await snapshot.ref.getDownloadURL();
    return remoteURL;
  }

  return (
    <View>
      <TouchableHighlight>
        <ViewContainer>
          <View style={{ padding: dp(10) }}>
            <Button
              onPress={() => openCamera(id, folder)}
              title="Selecione uma imagem."
            />
          </View>
          <View style={{ padding: dp(10) }}>
            <Button
              onPress={() => openGaleria(id, folder)}
              title="Abrir camera"
            />
          </View>

          <View style={{ padding: dp(30) }}>
            {pickedImagePath !== '' && (
              <Image
                source={{ uri: pickedImagePath }}
                style={{
                  width: '100%',
                  height: 300,
                }}
              />
            )}
          </View>
        </ViewContainer>
      </TouchableHighlight>
    </View>
  );
};

export default ImageUploader;
