import firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export const create = async (
  name,
  species,
  sex,
  size,
  age,
  mood,
  health,
  disease,
  adoption_needs,
  description,
) => {
  try {
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('animals').doc(currentUser.uid).set({
      owner_id: currentUser.id,
      name: name,
      species: species,
      sex: sex,
      size: size,
      age: age,
      mood: mood,
      health: health,
      disease: disease,
      adoption_needs: adoption_needs,
      description: description,
    });
  } catch (err) {
    Alert.alert('There is something wrong!!!!', err.message);
  }
};

export const show = async (id) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('animals')
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          Alert.alert('No animal data found!');
          reject('No animal data found!');
        } else {
          resolve(doc.data());
        }
      });
  });
};

const Animals = {
  create,
  show,
};

export default Animals;
