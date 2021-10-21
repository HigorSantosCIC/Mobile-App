import firebase from 'firebase';
import api from '../services/api';

export const getUserImageUrl = async (userName = null) => {
  let imageName = '';
  if (!userName) {
    let currentUserUID = firebase.auth().currentUser;
    let user = await api.Users.show(currentUserUID);
    imageName = user.userName;
  }
  const ref = firebase.storage().ref().child(`images/users/${imageName}`);
  return await ref.getDownloadURL();
};
