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

export const myNotifications = async ({ currentUserId }) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('notifications')
      .where('toUserId', '==', currentUserId)
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

const Notifications = {
  create,
  myNotifications,
};

export default Notifications;
