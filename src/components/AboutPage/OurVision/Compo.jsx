import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";

const Compo = ({ Heading, content }) => {
  return (
    <div className="mainContent">
      <div className="heading">
        {Heading === "Our Vision" ? (
          <GiNetworkBars className="icon" />
        ) : (
          <FaNetworkWired className="icon" />
        )}
        <h2>{Heading}</h2>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Compo;
