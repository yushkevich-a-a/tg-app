import React, { useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Header } from "./components/Header";
import { useTelegram } from "./hooks/useTelegram";
import { Outlet } from "react-router-dom";
import { BGWrapper } from "./background/BGWrapper";

export const App = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.expand();
  }, []);

  return (
    <ThemeProvider>
      <BGWrapper>
        <div>
          <Header />
          <Outlet />
        </div>
      </BGWrapper>
    </ThemeProvider>
  );
};
