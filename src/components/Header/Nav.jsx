import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img width={140} src="./qoach.png" alt="" />
          </a>

          <div className="navLinks">
            <ul className="navbar-nav d-flex flex-row pe-3">
              <li className="nav-item fs-2 p-3">
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "Active" : "")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item fs-2 p-3">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => (isActive ? "Active" : "")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item fs-2 p-3">
                <NavLink
                  to={"/stream"}
                  className={({ isActive }) => (isActive ? "Active" : "")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Activity Stream
                </NavLink>
              </li>
              <li className="nav-item fs-2 p-3">
                <NavLink
                  to={"/become_a_coach"}
                  className={({ isActive }) => (isActive ? "Active" : "")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Become a Coach
                </NavLink>
              </li>
              <li className="nav-item fs-2 p-3">
                <NavLink
                  to={"/browser_coach"}
                  className={({ isActive }) => (isActive ? "Active" : "")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Browser Coach
                </NavLink>
              </li>

              <li className="nav-item fs-2 p-2">
                <button type="button" className="btns">
                  Login
                </button>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/cute-clipart/64/menu.png"
              alt="menu"
            />
          </button>
          <div
            className="offcanvas offcanvas-end sideBar"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="./qoach.png" alt="" />
              </h5>
              <button
                type="button"
                className="btn-close p-4 fs-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item fs-2 p-3">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item fs-2 p-3">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item fs-2 p-3">
                  <NavLink
                    to={"/stream"}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Activity Stream
                  </NavLink>
                </li>
                <li className="nav-item fs-2 p-3">
                  <NavLink
                    to={"/become_a_coach"}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Become a Coach
                  </NavLink>
                </li>
                <li className="nav-item fs-2 p-3">
                  <NavLink
                    to={"/browser_coach"}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Browser Coach
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-row justify-content-center gap-5 mb-5">
              <button
                className="btn btn-primary fs-3 p-3 btns fw-medium"
                type="button"
              >
                Sign Up
              </button>
              <button
                className="btn btn-primary fs-3 p-3 btns fw-medium"
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
