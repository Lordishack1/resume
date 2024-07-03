import React from "react";
import "./App.css";
import Home from "./componets/Home.js";
import Expertise from "./componets/Expertise.js";
import Work from "./componets/Work.js";
//import Experiance from "./componets/Experience.js";
import Contact from "./componets/Contact.js";
import Header from "./componets/Header.js";

function App() {
  return (
    <div className="App">
      <Header className="headerStyle" />
      <Home className="homeStyle" />
      <Work className="workStyle" />
      <Expertise className="expertiseStyle" />
      <Contact className="contactStyle" />
    </div>
  );
}
//<Experiance className="experianceStyle" />
export default App;

/*
color palette 
#0554F2 
#076DF2
#F2F2F2

#3889F2
#ODODOD
*/
