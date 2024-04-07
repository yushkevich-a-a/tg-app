import React, { useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { useTelegram } from "./hooks/useTelegram";

export const App = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.expand();
  }, []);

  return (
    <ThemeProvider>
      <div>
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
};
