import React, { useState } from "react";
import Button from "../Buttons/Button";
import Menu from "./Menu";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="logoContainer">
          <img src="./public/qoach.png" alt="" />
        </div>
        <div className="rightContainer">
          <div className="navLinks">
            <p>Home</p>
            <p className="Active">About Us</p>
            <p>Browser Coach</p>
            <p>Activity Stream</p>
            <p>Become a Coach</p>
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
