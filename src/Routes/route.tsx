import React from "react";
import { Route, Routes } from "react-router-dom";

// import LoginPage, { Login } from "../Pages/login";
import DashboardPage from "../Pages/dashboard";
import { DashboardProviders } from "../providers/dashboard";
import { Login } from "../Pages/login";

const Application: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <DashboardProviders>
            <DashboardPage />
          </DashboardProviders>
        }
      />

      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Application;
