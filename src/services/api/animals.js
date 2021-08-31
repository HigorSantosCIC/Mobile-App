import firebase from 'firebase';
import { Alert } from 'react-native';

export const all = async () => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('animal')
      .get()
      .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          array.push(doc.data());
        });
        resolve(array);
      });
  });
};

const Animals = {
  all,
};

export default Animals;
