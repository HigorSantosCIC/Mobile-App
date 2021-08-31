import firebase from 'firebase';

export const all = async ({ isAdopted = false }) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('animal')
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
  const docRefAnimal = firebase.firestore().collection('animal').doc(animalId);

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

const Animals = {
  all,
  adopt,
};

export default Animals;
