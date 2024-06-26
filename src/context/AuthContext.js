import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(handleUser);
    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  const handleUser = user => {
    console.log('use hoihsgdr', user);
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{user, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
