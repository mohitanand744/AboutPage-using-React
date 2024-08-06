import Nav from "../components/Header/Nav";
import AboutQoachDetails from "../components/AboutPage/AboutQoach/AboutQoachDetails";
import Vision from "../components/AboutPage/OurVision/Vision";
import Message from "../components/AboutPage/CCO/Message";
import CoreValues from "../components/AboutPage/OurCoreValues/CoreValues";

function About() {
  return (
    <div className="about">
      <AboutQoachDetails />
      <Vision />
      <Message />
      <CoreValues />
    </div>
  );
}

export default About;
