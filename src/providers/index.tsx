import { ReactNode } from "react";
import { DashboardProviders } from "./dashboard";
import { LoginProviders } from "./login";

interface IChildrenReact {
  children: ReactNode;
}

const Providers = ({ children }: IChildrenReact) => {
  return (
    <LoginProviders>
      <DashboardProviders>{children}</DashboardProviders>
    </LoginProviders>
  );
};

export default Providers;
