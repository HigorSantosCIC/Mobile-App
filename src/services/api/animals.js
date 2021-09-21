import firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export const create = async (props) => {
  const {
    name,
    species,
    sex,
    size,
    age,
    mood,
    health,
    disease,
    adoptionNeeds,
    description,
  } = props;
  try {
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();

    db.collection('animals').add({
      owner_id: currentUser.uid,
      name: name,
      species: species,
      sex: sex,
      size: size,
      age: age,
      mood: mood,
      health: health,
      disease: disease,
      adoptionNeeds: adoptionNeeds,
      description: description,
      is_adoption: false,
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

export const all = async ({ isAdopted = false }) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('animals')
      .where('is_adoption', '==', isAdopted)
      .get()
      .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          array.push({ id: doc.id, ...doc.data() });
        });
        resolve(array);
      })
      .catch((e) => reject(e));
  });
};

export const adopt = async (animalId, newOwnerId) => {
  const docRefAnimal = firebase.firestore().collection('animals').doc(animalId);

  return firebase.firestore().runTransaction((transaction) => {
    return transaction.get(docRefAnimal).then((animal) => {
      if (!animal.exists) {
        throw 'Animal does not exists!';
      }

      const newAdoptRef = firebase.firestore().collection('adoption').doc();

      transaction.set(newAdoptRef, {
        animal_id: animalId,
        new_owner_id: newOwnerId,
        old_owner_id: animal.data().owner_id,
      });

      transaction.update(docRefAnimal, {
        owner_id: newOwnerId,
        is_adoption: true,
      });
    });
  });
};

export const myAnimals = async ({ currentUserId }) => {
  console.log(currentUserId);
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('animals')
      .where('owner_id', '==', currentUserId)
      .get()
      .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          array.push({ id: doc.id, ...doc.data() });
        });
        resolve(array);
      })
      .catch((e) => reject(e));
  });
};

const Animals = {
  create,
  show,
  all,
  adopt,
  myAnimals,
};

export default Animals;
