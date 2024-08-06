import React from "react";
import { MdSettingsSuggest } from "react-icons/md";
import { MdDisplaySettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

const CoreValues = () => {
  return (
    <div className="CoreValues">
      <header>
        <h2>Our Core Values</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div>
            <MdSettingsSuggest className="icon" />
          </div>
          <div className="txt">
            <p className="title">Precision and Personalization</p>
            <p className="contents">
              We prioritize matching you with the coach who best fits your
              unique needs.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <MdDisplaySettings className="icon" />
          </div>
          <div className="txt">
            <p className="title">Precision and Personalization</p>
            <p className="contents">
              We believe that everyone with expertise can be a coach, regardless
              of formal coaching experience or qualifications.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <FaUsers className="icon" />
          </div>
          <div className="txt">
            <p className="title">Precision and Personalization</p>
            <p className="contents">
              We prioritize matching you with the coach who best fits your
              unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
