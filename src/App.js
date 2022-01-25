import "./App.css";
import Header from "./My Component/Header";
import Homepage from "./Pages/Homepage";
import About from "./My Component/About";
import Contact from "./My Component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Weather from "./Pages/Weather";

function App() {

 
 
  return (
<>
   
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
