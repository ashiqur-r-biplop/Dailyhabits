/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
// import axios from "axios";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [Favorite, setFavorite] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get and set token\
      
      if (currentUser) {
        axios
          .post("https://habit-server-eight.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log(data);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
            setReload(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      // setLoading(false);
      // setReload(false);
    });
    return () => {
      unSubscribe();
    };
  }, [reload]);
  const ProfileUpdate = (name, PhotoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: PhotoUrl,
    });
  };
  const authInfo = {
    user,
    signUp,
    login,
    logout,
    loading,
    ProfileUpdate,
    auth,
    setFavorite,
    Favorite,
    setReload,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
