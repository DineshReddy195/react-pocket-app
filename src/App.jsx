import React from "react";
import "./App.css";
import "react-responsive-modal/styles.css";
import { Route, Routes } from "react-router-dom";
import Groups from "./Components/Groups/Groups";
import Content from "./Components/Content/Content";
import Default from './Components/Default/Default'

function App() {
  return (
    <div className="app">
      <Groups />
      <div>
        <Routes>
          <Route path="/rooms/:topic" element={<Content />} />
          <Route path="/" element={<Default/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
