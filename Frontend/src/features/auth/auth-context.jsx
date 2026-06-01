import { useEffect, useState } from "react";
import { createContext } from "react";
import { getMeApi } from "../services/api-auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMeApi();
        setUser(data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoding(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoding }}>
      {children}
    </AuthContext.Provider>
  );
};
