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
      <SideBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coming-soon" element={<Comingsoon />} />
      </Routes>
    </Router>
  );
}

export default Main;

const SubContainer = styled.section`
  display: flex;
`;
const MenuBar = styled.aside`
  width: 7%;
`;
