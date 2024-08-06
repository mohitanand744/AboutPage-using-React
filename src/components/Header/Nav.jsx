import React, { useState } from "react";
import Button from "../Buttons/Button";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="logoContainer">
          <img src="/qoach.png" alt="" />
        </div>
        <div className="rightContainer">
          <div className="navLinks">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              About Us
            </NavLink>
            <NavLink
              to={"/browser_coach"}
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              Browser Coach
            </NavLink>
            <NavLink
              to={"/stream"}
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              Activity Stream
            </NavLink>
            <NavLink
              to={"/become_a_coach"}
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              Become a Coach
            </NavLink>
          </div>
          <div className="btnContainer">
            <Button ClassName={"transparent"} text={"Login"} />
            <div className="menu" onClick={() => setMenu(!menu)}>
              <img
                src="https://img.icons8.com/cute-clipart/64/menu.png"
                alt="menu"
              />
            </div>
          </div>
        </div>
      </nav>
      {menu ? <Menu /> : ""}
    </>
  );
};

export default Nav;
