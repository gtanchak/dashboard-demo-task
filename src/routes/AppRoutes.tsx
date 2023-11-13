import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MultiStepSignup from "../pages/multistep-singup";
import App from "../App";
import PersonlaInfoSignup from "../pages/personalinfo-signup";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/dashboard";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/auth/multistep-signup" element={<MultiStepSignup />} />
          <Route
            path="/auth/personalinfo-signup"
            element={<PersonlaInfoSignup />}
          />
        </Route>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/submit-violations"
            element={<h1>submit-violations</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
