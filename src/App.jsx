import "./App.css";
import Nav from "./components/Header/Nav";
import AboutQoachDetails from "./components/AboutQoach/AboutQoachDetails";
import Vision from "./components/OurVision/Vision";
import Message from "./components/CCO/Message";

function App() {
  return (
    <div className="app">
      <Nav />
      <AboutQoachDetails />
      <Vision />
      <Message />
    </div>
  );
}

export default App;
