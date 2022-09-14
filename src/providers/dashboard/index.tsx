import { createContext, ReactNode} from "react";
import { Login } from "../../Pages/login";

interface IChildrenReact {
  children: ReactNode;
}




export const DashboardContext = createContext({});

export const DashboardProviders = ({ children }: IChildrenReact) => {



  if (!localStorage.getItem("token")) {
    return <Login />;
  }

  return (
    <DashboardContext.Provider value={{  }}>
      {children}
    </DashboardContext.Provider>
  );
};
