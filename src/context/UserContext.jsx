import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/config";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function createUser(email, password) {
    setError("");

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/home"))
      .catch((err) => setError(err.code));
  }

  async function loginUser(email, password) {
    setError("");

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/home"))
      .catch((err) => setError(err.code));
  }

  async function logout() {
    setError("");

    await signOut(auth)
      .then(() => navigate("/"))
      .catch((err) => setError(error.code));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const isUserLoggedIn = Boolean(user?.uid);

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        logout,
        setError,
        user,
        isUserLoggedIn,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of the UserProvider");
  return context;
}
