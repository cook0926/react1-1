import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./Eaxmple.js";
import Accommodate from "./0501-2/Accommodate.jsx";
import LandingPage from "./0522-1/LandingPage.jsx";
import NumberList from "./0522-2/NumberList.jsx";
import AttendanceBook from "./0522-2/AttendanceBook.jsx";


function App() {
  return (
    <div>
      {/* <Accommodate />
      <Example /> */}
      <LandingPage/>
      <NumberList/>
      <AttendanceBook/>
      
    </div>
  );
}

export default App;