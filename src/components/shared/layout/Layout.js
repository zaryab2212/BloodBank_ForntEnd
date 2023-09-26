import React from "react";
import Header from "../Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        {" "}
        <Header></Header>
      </div>
      <div className="row g-0">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>

        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;
