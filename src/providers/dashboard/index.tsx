import { createContext, ReactNode, useContext } from "react";
import { Login } from "../../Pages/login";
import { LoginContext } from "../login";

interface IChildrenReact {
  children: ReactNode;
}

export const DashboardContext = createContext({});

export const DashboardProviders = ({ children }: IChildrenReact) => {
  const auth = useContext(LoginContext);

  if (!auth.user) {
    return <Login />;
  }

  return (
    <DashboardContext.Provider value={{}}>{children}</DashboardContext.Provider>
  );
};
