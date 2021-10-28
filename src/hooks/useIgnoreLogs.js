import { useEffect } from 'react';
import { LogBox } from 'react-native';

export const useIgnoreLogs = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer for a long period']);
  }, []);
};
