import firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export const create = async (
  fullName,
  age,
  email,
  state,
  city,
  address,
  phone,
  userName,
  password,
) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('users').doc(currentUser.uid).set({
      fullName: fullName,
      age: age,
      email: email,
      state: state,
      city: city,
      address: address,
      phone: phone,
      userName: userName,
    });
  } catch (err) {
    Alert.alert('There is something wrong!!!!', err.message);
  }
};

export const show = async (id) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          Alert.alert('No user data found!');
          reject('No user data found!');
        } else {
          resolve(doc.data());
        }
      });
  });
};

const Users = {
  create,
  show,
};

export default Users;
