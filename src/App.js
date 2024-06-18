import React from "react";
import "./App.css";
import Home from "./componets/Home.js";
import Expertise from "./componets/Expertise.js";
import Work from "./componets/Work.js";
import Experiance from "./componets/Experience.js";
import Contact from "./componets/Contact.js";
import Header from "./componets/Header.js";

function App() {
  return (
    <div className="App">
      <Header className="headerStyle" />
      <Home className="homeStyle" />
      <Expertise className="expertiseStyle" />
      <Work className="workStyle" />
      <Experiance className="experianceStyle" />
      <Contact className="contactStyle" />
    </div>
  );
}

export default App;
