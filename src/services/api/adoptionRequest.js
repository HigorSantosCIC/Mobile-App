import firebase from 'firebase';
import Notifications from './notifications';

export const create = async (animalId, ownerAnimalId, currentUserId) => {
  const db = firebase.firestore();

  try {
    db.collection('adoptionRequest').add({
      animalId: animalId,
      requestUserId: currentUserId,
      accepted: false,
    });

    Notifications.create({
      fromUserId: currentUserId,
      toUserId: ownerAnimalId,
      title: 'Seu animal foi requsitado para adoção',
      body: 'Clique para responder a solicitação',
      type: 'adoptionRequest',
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const AdoptionRequest = {
  create,
};

export default AdoptionRequest;
