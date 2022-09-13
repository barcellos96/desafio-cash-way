import { createContext, ReactNode } from "react";
import { useApi } from "../../hooks/useApi";
import { Login } from "../../Pages/login";

interface IChildrenReact {
  children: ReactNode;
}

interface IDashboardData {
  LastMonthStatements: any;
}

export const DashboardContext = createContext<IDashboardData>(
  {} as IDashboardData
);

export const DashboardProviders = ({ children }: IChildrenReact) => {
  const api = useApi();

  async function LastMonthStatements() {
    const dataLastMonth = await api.StatementsLastMonth();
    return dataLastMonth;
  }

  if (!localStorage.getItem("token")) {
    return <Login />;
  }

  return (
    <DashboardContext.Provider value={{ LastMonthStatements }}>
      {children}
    </DashboardContext.Provider>
  );
};
