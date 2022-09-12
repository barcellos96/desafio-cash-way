import { createContext, ReactNode, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

// import * as api from "../../services/api";

interface IChildrenReact {
  children: ReactNode;
}

export type IUser = {
  account: string;
  password: string;
  holder: string;
};

interface ILoginData {
  user: { account: string; password: string; holder: string } | null;
  Login(account: string, password: string, holder: string): Promise<boolean>;
  Logout(): void;
}

export const LoginContext = createContext<ILoginData>(null!);

export const LoginProviders = ({ children }: IChildrenReact) => {
  const [user, setUser] = useState<IUser | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToke = async () => {
      const validateStorage = localStorage.getItem("token");
      if (validateStorage) {
        const data = await api.validationTakon(validateStorage);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToke();
  }, []);

  async function Login(account: string, password: string, holder: string) {
    const data = await api.Login(account, password, holder);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  }

  async function Logout() {
    setUser(null);
    setToken("");
    await api.Logout();
  }

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  return (
    <LoginContext.Provider
      value={{
        user,
        Login,
        Logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
