import React from "react";
import { NavBarViewProvider } from "../NavBar";
import { Footer } from "../Footer";
export const Layout = function ({ children }) {
  return (
    <div className="App">
      <NavBarViewProvider />
      {children}
      <Footer />
    </div>
  );
};
