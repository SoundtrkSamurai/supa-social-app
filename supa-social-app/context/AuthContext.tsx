import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "@supabase/supabase-js";

const AuthContext = createContext<CreateAuthContextProviderProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const setAuth = (authUser: User) => {
    setUser(authUser);
  };

  const setUserData = (userData: User) => setUser({ ...userData });

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

type CreateAuthContextProviderProps = {
  user: User | null;
  setAuth(user: User | null): void;
  setUserData(user: User): void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const useAuth = () => useContext(AuthContext);
