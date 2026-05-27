import {useState } from "react";
import { createContext } from "react";
import { getMeApi } from "../services/api-auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(false);



  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoding }}>
      {children}
    </AuthContext.Provider>
  );
};
