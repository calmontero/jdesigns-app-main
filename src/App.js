import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
//import { BASE_URL } from "./constraints/index";
import Navigation from "./components/Navigation/Navigation";
import Page from "./pages/page";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/jobs" element={<Page title={"Servicios"} />} />
        <Route path="/testimonials" element={<Page title={"Testimonios"} />} />
        <Route path="/downloads" element={<Page title={"Descargas"} />} />
      </Routes>
    </>
  );
}

export default App;