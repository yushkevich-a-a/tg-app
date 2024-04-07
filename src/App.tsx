import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

export const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
};
