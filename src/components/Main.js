import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Comingsoon from "./Comingsoon";

function Main() {
  return (
    <Router>
      <Navbar />
      <MenuBar>
        <SideBar />
      </MenuBar>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Comingsoon />} />
        <Route path="/calender" element={<Comingsoon />} />
        <Route path="/note" element={<Comingsoon />} />
        <Route path="/message" element={<Comingsoon />} />
      </Routes>
    </Router>
  );
}

export default Main;

const MenuBar = styled.aside`
  width: 7%;
`;
