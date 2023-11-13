import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.bundle.css";
import "./assets/global/plugins.bundle.css";

const App: FC = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
