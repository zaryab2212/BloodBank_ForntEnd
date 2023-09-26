import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.clear();
    alert("Log Out Successful");
    navigate("/auth/login");
  };
  return (
    <>
      {/* {!localStorage.getItem("token") && <Navigate to="/auth/login"></Navigate>} */}
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/">
            {" "}
            <div className="narbar-brand">
              {" "}
              <BiDonateBlood color="red" width="6" /> Blood Bank App
            </div>
          </Link>
          <ul className="navbar-nav flex-row ">
            <li className="nav-item mx-4">
              <p className="nav-link">
                {" "}
                <BiUserCircle /> Wellcome{" "}
                {user?.name || user?.organizationname || user?.hospitalname}!
                <span class="badge bg-secondary mx-3">{user?.role}</span>{" "}
              </p>
            </li>
            <li className="nav-item mx-2">
              <Link
                to={
                  window.location.pathname === "/analytics" ? "/" : "/analytics"
                }
                className="nav-link"
              >
                {window.location.pathname === "/analytics" ? (
                  <b>Home</b>
                ) : (
                  <b>Analytics</b>
                )}
              </Link>
            </li>
            <li className="nav-item mx-4">
              <button className="btn btn-danger" onClick={handleLogout}>
                {" "}
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
