import { useContext } from 'react';
import UserAuthContextProvider from '../context/UserAuthContext';

const useAuth = () => {
  return useContext(UserAuthContextProvider);
};

export default useAuth;
