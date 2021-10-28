import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import api from '../services/api';

export const AuthContext = React.createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        api.Users.show(user.uid).then((user) => {
          setUser({ uid: uid, ...user });
        });
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
