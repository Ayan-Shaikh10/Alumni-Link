import { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/firebase";

import { getUser } from "../services/userService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null);

  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      setCurrentUser(user);

      if (user) {

        const data = await getUser(user.uid);

        setUserData(data);

      } else {

        setUserData(null);

      }

      setLoading(false);

    });

    return unsubscribe;

  }, []);

  return (

    <AuthContext.Provider
      value={{
        currentUser,
        userData,
        setUserData
      }}
    >

      {!loading && children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(AuthContext);

}