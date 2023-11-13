import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MultiStepSignup from "../pages/multistep-singup";
import App from "../App";
import PersonlaInfoSignup from "../pages/personalinfo-signup";
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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
