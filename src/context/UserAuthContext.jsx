import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/auth/firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Create a Auth Context
export const UserAuthContext = createContext();

// Create a Auth Context Provider
const UserAuthContextProvider = ({ children }) => {
  // Create a state to store the user
  const [user, setUser] = useState(null);

  // Create a state to store the loading state
  const [loading, setLoading] = useState(true);

  // Create a function to sign up a user
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Create a function to log in a user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Create a function to log out a user
  const logOut = () => {
    return signOut(auth);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Create a value for the context
  const value = {
    user,
    signUp,
    logIn,
    logOut,
  };

  return (
    <UserAuthContext.Provider value={value}>
      {!loading && children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
// Create a custom hook to use the Auth Context
// export const useAuth = () => {
//   return useContext(UserAuthContext);
// };
