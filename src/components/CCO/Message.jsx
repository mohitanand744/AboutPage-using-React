import React from "react";

const Message = () => {
  return (
    <div className="CCOcontainer">
      <header>
        <p>
          A Message from Our Chief <br /> Coaching Officer
        </p>
      </header>
      <div className="msgContainer">
        <div className="profileImage">
          <img src="./Profil.png" alt="" />
          <p>Icy Williams</p>
          <p>Chief Coaching Officer</p>
        </div>
        <div className="txtCon">
          <p>
            Welcome to Qoach.io,
            <br />
            <br />
            I'm honored to introduce you to our platform dedicated to your
            personal growth and professional development. At Qoach.io, our
            mission is deeply rooted in empowering individuals like you to
            unleash your full potential.
            <br />
            <br />
            Throughout my career as a coach, I've witnessed firsthand the
            transformative impact of personalized coaching. It's not just about
            achieving goals; it's about the journey of discovery, resilience,
            and growth. Our team of dedicated coaches at Qoach.io is committed
            to guiding you through this journey, providing you with the tools,
            insights, and support you need to succeed.
            <br />
            <br />
            I believe in the power of connection – connecting you with coaches
            who not only possess the expertise you seek but also understand your
            unique challenges. Whether you're navigating career transitions,
            seeking to enhance your leadership skills, or striving for personal
            balance, Qoach.io is here to match you with coaches who will inspire
            and empower you.
            <br />
            <br />
            Our vision is to create a community where coaching is not just a
            service but a partnership in your journey towards fulfillment and
            success. Together, we can achieve remarkable things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
