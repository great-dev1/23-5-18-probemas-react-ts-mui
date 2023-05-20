import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/Home";

import "./App.css";
import routes, { IRouteConfig } from "./routes";
import AppProvider from "./contexts/AppProvider";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <Routes>
            {routes.map((route: IRouteConfig, index) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  Component={route.component}
                />
              );
            })}
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
