import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Desktop from "./components/Desktop/Desktop";

import { ThemeProvider } from "@react95/core";
import "@react95/icons/icons.css";

const App = () => (
  <div>
    <ThemeProvider>
      <Desktop />
    </ThemeProvider>
  </div>
);

export default App;
