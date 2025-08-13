import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Footer } from "./footer/Footer";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64">
          <main className="flex-1 p-6 mt-16 transition-all duration-300  bg-gray-100">
            <div className="bg-white rounded-lg  p-6 h-full">
              <Outlet />
            </div>
          </main>

          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};
