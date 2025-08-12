import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Footer } from "./footer/Footer";
import "../styles/main.css"; // Importe o CSS

export const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
