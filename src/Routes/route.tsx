import React from "react";
import { Route, Routes } from "react-router-dom";

import DashboardPage from "../Pages/dashboard";
import { Login } from "../Pages/login";

const Application: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
            <DashboardPage />
        }
      />

      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Application;
