import React from "react";

import { Link, useLocation } from "react-router-dom";
import "../../../Styles/LayOut.css";
import { useSelector } from "react-redux";

const SideBar = () => {
  const user = useSelector((state) => state.auth);

  return (
    <>
      {/* {console.log(user)} */}
      <div className="sidebar">
        <div className="menu">
          {user?.user?.role === "organization" && (
            <>
              {" "}
              <div
                className={`menu-item ${
                  window.location.pathname === "/" && `active`
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/"> Inventory </Link>
              </div>
              <div
                className={`menu-item ${
                  window.location.pathname === "/hospital" && `active`
                }`}
              >
                <i className="fas fa-dungeon"></i>
                <Link to="/hospital"> Hospital </Link>
              </div>
              <div
                className={`menu-item ${
                  window.location.pathname === "/donor" && `active`
                }`}
              >
                <i className="fas fa-dungeon"></i>
                <Link to="/donor"> Donor </Link>
              </div>
            </>
          )}
          {user?.user?.role === "admin" && (
            <>
              {" "}
              <div
                className={`menu-item ${
                  window.location.pathname === "/get-organization" && `active`
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/get-organization"> Organizations </Link>
              </div>
              <div
                className={`menu-item ${
                  window.location.pathname === "/get-hospital" && `active`
                }`}
              >
                <i className="fas fa-dungeon"></i>
                <Link to="/get-hospital"> Hospitals </Link>
              </div>
              <div
                className={`menu-item ${
                  window.location.pathname === "/get-donor" && `active`
                }`}
              >
                <i className="fas fa-dungeon"></i>
                <Link to="/get-donor"> Donors </Link>
              </div>
            </>
          )}
          {(user?.user?.role === "donor" ||
            user?.user?.role === "hospital") && (
            <>
              <div
                className={`menu-item ${
                  window.location.pathname === "/organization" && `active`
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/organization"> Organization </Link>
              </div>
              <div
                className={`menu-item ${
                  window.location.pathname === "/consumer" && `active`
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/consumer"> Consumer </Link>
              </div>
            </>
          )}

          {/* {userMenu.map((e) => {
            const isActive = location.pathname === e.path;
            return (
              <div className={`menu-item ${isActive && `active`}`}>
                <i className={e.icon}></i>
                <Link to={e.path}> {e.name} </Link>
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
