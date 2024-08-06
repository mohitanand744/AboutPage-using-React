import { useState } from "react";
import "./App.css";
import Nav from "./components/Header/Nav";
import AboutQoachDetails from "./components/AboutQoach/AboutQoachDetails";
import Vision from "./components/OurVision/Vision";

function App() {
  return (
    <div className="app">
      <Nav />
      <AboutQoachDetails />
      <Vision />
    </div>
  );
}

export default App;
