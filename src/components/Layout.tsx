import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./admin/Header";
import { Sidebar } from "./admin/Sidebar";
import { Footer } from "./admin/Footer";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
