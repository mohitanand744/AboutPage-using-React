import React from "react";

const Button = ({ ClassName, text }) => {
  return <button className={`${ClassName}`}>{text}</button>;
};

export default Button;
