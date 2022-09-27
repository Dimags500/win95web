import React from "react";
import { ThemeProvider } from "@react95/core";
import "@react95/icons/icons.css";
import "./App.css";
import Facade from "./Facade";

const App = () => (
  <div>
    <ThemeProvider>
      <Facade />
    </ThemeProvider>
  </div>
);

export default App;
