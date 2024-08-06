import React from "react";
import Compo from "./Compo";

const Vision = () => {
  return (
    <>
      <div className="visionContainer">
        <Compo
          Heading={"Our Vision"}
          content={`At Qoach.io, our vision is to be the leading platform that empowers
          individuals worldwide to achieve their fullest potential through
          personalized coaching experiences. We envision a community where every
          person has access to the guidance and support they need to thrive
          personally and professionally.`}
        />
        <Compo
          Heading={"Our Mission"}
          content={`Our mission at Qoach.io is two-fold: to empower individuals on their journey to personal and professional fulfillment through effective coaching, and to empower knowledgeable individuals to become coaches and share their expertise. We believe in the transformative power of coaching to unlock potential and drive meaningful change in people's lives. By connecting individuals with coaches who have overcome challenges similar to theirs and achieved success, we provide personalized guidance and support that inspires confidence and accelerates progress. Simultaneously, by enabling knowledgeable individuals to become coaches on our platform, we foster a community where expertise is shared and personal growth is nurtured.`}
        />
      </div>
    </>
  );
};

export default Vision;
