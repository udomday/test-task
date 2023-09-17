import React from "react";
import { Footer, Header, SideBar } from "../../components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="wrapper flex">
      <SideBar />
      <div style={{ width: "100%", height: "100%" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
