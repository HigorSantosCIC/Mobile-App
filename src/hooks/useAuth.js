import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
