import firebase from 'firebase';

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

export const loggingOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const Sessions = {
  create: (email, password) => signIn(email, password),
  destroy: () => loggingOut(),
};

export default Sessions;
