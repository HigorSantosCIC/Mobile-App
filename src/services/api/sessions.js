import firebase from 'firebase';
import { Alert } from 'react-native';

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
};

export const loggingOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
};

const Sessions = {
  create: (email, password) => signIn(email, password),
  destroy: () => loggingOut(),
};

export default Sessions;
