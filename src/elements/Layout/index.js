import React from "react";
import { NavBarViewProvider } from "../NavBar";
import { Footer } from "../Footer";
import { SemanticToastContainer } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

export const Layout = function ({ children }) {
  return (
    <div className="App">
      <NavBarViewProvider />
      <SemanticToastContainer position="top-right" />
      {children}
      <Footer />
    </div>
  );
};
