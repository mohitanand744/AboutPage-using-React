import React from "react";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.navLinks}>
      <p>Home</p>
      <p className={style.Active}>About Us</p>
      <p>Browser Coach</p>
      <p>Activity Stream</p>
      <p>Become a Coach</p>
    </div>
  );
};

export default Menu;
