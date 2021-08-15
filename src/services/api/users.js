import * as firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export const create = async (email, password, name) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('users').doc(currentUser.uid).set({
      email: currentUser.email,
      name: name,
    });
  } catch (err) {
    Alert.alert('There is something wrong!!!!', err.message);
  }
};

const Users = {
  create,
};

export default Users;
