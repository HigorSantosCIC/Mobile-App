import firebase from 'firebase';
import Notifications from './notifications';
import { adopt } from './animals';

export const create = async (animalId, ownerAnimalId, currentUserId) => {
  const db = firebase.firestore();

  try {
    const adoptionRequest = await db.collection('adoptionRequest').add({
      animalId: animalId,
      requestUserId: currentUserId,
      accepted: false,
    });

    Notifications.create({
      fromUserId: currentUserId,
      toUserId: ownerAnimalId,
      resourceId: adoptionRequest.id,
      title: 'Seu animal foi requisitado para adoção',
      body: 'Clique para responder a solicitação',
      type: 'adoptionRequest',
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const accept = async (adoptionRequestId) => {
  const db = firebase.firestore();
  console.log(adoptionRequestId);
  try {
    const adoptionRequestRef = db
      .collection('adoptionRequest')
      .doc(adoptionRequestId);
    // Update adoptionRequest
    const adoptionRequest = (await adoptionRequestRef.get()).data();
    adoptionRequestRef.update({
      accepted: true,
    });

    // Adopt animal
    adopt(adoptionRequest.animalId, adoptionRequest.requestUserId);

    // Notifications
    Notifications.create({
      fromUserId: adoptionRequest.requestUserId,
      toUserId: adoptionRequest.requestUserId,
      title: 'Parabéns!! Seu pedido de adoção foi aceito',
      body: 'Agora cuide muito bem do seu animal',
      type: 'adoptionRequestAccept',
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const reject = async (adoptionRequestId) => {
  const db = firebase.firestore();

  try {
    const adoptionRequest = db
      .collection('adoptionRequestId')
      .doc(adoptionRequestId)
      .get();

    Notifications.create({
      fromUserId: adoptionRequest.requestUserId,
      toUserId: adoptionRequest.requestUserId,
      title: 'Seu pedido de adoção não foi aceito',
      body: 'Procure outro animal que precisa de um dono',
      type: 'adoptionRequestReject',
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const AdoptionRequest = {
  create,
  accept,
  reject,
};

export default AdoptionRequest;
