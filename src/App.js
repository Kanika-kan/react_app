import "./App.css";
import Header from "./My Component/Header";
import Homepage from "./Pages/Homepage";
import About from "./My Component/About";
import Contact from "./My Component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Weather from "./Pages/Weather";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivateRoute from "./Routes/privateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
         <Header /> 
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Homepage />} />
          </Route>
          <Route exact path="/about" element={<PrivateRoute />}>
            <Route exact path="/about" element={<About />} />
          </Route>

          <Route exact path="/contact" element={<PrivateRoute />}>
            <Route exact path="/contact" element={<Contact />} />
          </Route>
          {/* <Route path="/about/:id" element={<About />} /> */}
          <Route exact path="/weather" element={<PrivateRoute />}>
            <Route exact path="/weather" element={<Weather />} />
          </Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
