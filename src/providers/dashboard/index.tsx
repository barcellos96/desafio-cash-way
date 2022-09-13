import { createContext, ReactNode, useContext, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Login } from "../../Pages/login";
import { LoginContext } from "../login";

interface IChildrenReact {
  children: ReactNode;
}
interface IStatementsData {
  total_debits: number;
  total_credits: number;
}

interface IDashboardData {
  LastMonthStatements: any;
}

export const DashboardContext = createContext<IDashboardData>(
  {} as IDashboardData
);

export const DashboardProviders = ({ children }: IChildrenReact) => {
  const api = useApi();
  const [lastMonth, setLastMonth] = useState<IStatementsData>();

  async function LastMonthStatements(data: IStatementsData) {
    const dataLastMonth = await api.StatementsLastMonth(data);
    console.log(dataLastMonth);
    setLastMonth(dataLastMonth);
  }

  if (!localStorage.getItem("token")) {
    return <Login />;
  }

  return (
    <DashboardContext.Provider value={{ lastMonth, LastMonthStatements }}>
      {children}
    </DashboardContext.Provider>
  );
};
