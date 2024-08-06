import "./App.css";
import Nav from "./components/Header/Nav";
import AboutQoachDetails from "./components/AboutQoach/AboutQoachDetails";
import Vision from "./components/OurVision/Vision";
import Message from "./components/CCO/Message";
import CoreValues from "./components/OurCoreValues/CoreValues";

function App() {
  return (
    <div className="app">
      <Nav />
      <AboutQoachDetails />
      <Vision />
      <Message />
      <CoreValues />
    </div>
  );
}

export default App;
