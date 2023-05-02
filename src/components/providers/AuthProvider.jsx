import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";


export const DataProvider = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null);
  const [loader,setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
    
  };
  const emailLogin= (email,password) => {
    setLoader(true)
      return createUserWithEmailAndPassword(auth,email,password);
  }
  const userLogout = () => {
    setLoader(true)
    return signOut(auth);
  };
  const userLogin = (email,password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser);
      setLoader(false)
    });

    return () => {
      unsubscribe();
    };
  },[]);

  const functions = {
    user,
    googleLogin,
    setUser,
    emailLogin,
    userLogin,
    userLogout,
    loader,
  };

  return (
    <DataProvider.Provider value={functions}>{children}</DataProvider.Provider>
  );
};

export default AuthProvider;
