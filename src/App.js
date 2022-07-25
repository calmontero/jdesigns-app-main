import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
//import { BASE_URL } from "./constraints/index";
import Navigation from "./components/Navigation/Navigation";
import JobContainer from "./components/JobContainer/JobContainer";
import Page from "./pages/page";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<JobContainer />} />
        <Route path="/testimonials" element={<Page title={"Testimonios"} />} />
        <Route path="/downloads" element={<Page title={"Descargas"} />} />
      </Routes>
    </>
  );
}

export default App;