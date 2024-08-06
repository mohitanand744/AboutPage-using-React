import { useState } from "react";
import "./App.css";
import Nav from "./components/Header/Nav";
import AboutQoachDetails from "./components/AboutQoach/AboutQoachDetails";

function App() {
  return (
    <div className="app">
      <Nav />
      <AboutQoachDetails />
    </div>
  );
}

export default App;
