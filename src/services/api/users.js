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
  avatarUrl,
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
      avatarUrl: avatarUrl,
    });
  } catch (err) {
    console.log(err);
    throw err;
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

export const getAddress = async (id) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          Alert.alert('No owner data found!');
          reject('No owner data found!');
        } else {
          resolve(doc.data().address);
        }
      });
  });
};

const Users = {
  create,
  show,
  getAddress,
};

export default Users;
