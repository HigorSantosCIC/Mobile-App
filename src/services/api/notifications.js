import firebase from 'firebase';

// Available type adoptionRequest, adoptionRequestAccept, adoptionRequestReject
export const create = async ({
  fromUserId,
  toUserId,
  title,
  body,
  type = null,
  resourceId = null,
}) => {
  const db = firebase.firestore();

  try {
    db.collection('notifications').add({
      fromUserId,
      toUserId,
      title,
      body,
      type,
      resourceId,
      readed: false,
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
