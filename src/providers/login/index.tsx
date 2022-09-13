import { createContext, ReactNode, useState } from "react";
import { useApi } from "../../hooks/useApi";

interface IChildrenReact {
  children: ReactNode;
}

export type IUser = {
  account: string;
  password: string;
  holder: string;
};

interface ILoginData {
  user: IUser | null;
  headers: object;
  Login(data: IUser): Promise<boolean>;
  Logout(): void;
}

export const LoginContext = createContext<ILoginData>(null!);

export const LoginProviders = ({ children }: IChildrenReact) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [headers, setHeaders] = useState({});
  const api = useApi();

  async function Login(data: IUser) {
    const dataUser = await api.Login(data);
    api.validationToken(dataUser.headers);
    setHeaders(dataUser.headers);

    if (dataUser.data && dataUser.headers["access-token"]) {
      setUser(dataUser.data);
      setToken(
        dataUser.headers.uid,
        dataUser.headers.client,
        dataUser.headers["access-token"]
      );
      return true;
    }
    return false;
  }

  async function Logout() {
    setUser(null);
    setToken("", "", "");
    await api.Logout();
  }

  const setToken = (uid: string, client: string, token: string) => {
    localStorage.setItem("uid", uid);
    localStorage.setItem("client", client);
    localStorage.setItem("token", token);

  };

  return (
    <LoginContext.Provider
      value={{
        user,
        headers,
        Login,
        Logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
