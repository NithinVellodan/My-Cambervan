import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import LeftContent from "./LeftContent";
import RightContainer from "./RightContainer";

function LandingPage() {
  return (
    <Background>
      <LeftContent />
      <RightContainer />
    </Background>
  );
}

export default LandingPage;

const Background = styled.div`
  width: 93%;
  position: absolute;
  right: 0;
  top: 125px;
  background: #ebebeb;
  padding: 20px;
  display: flex;
`;
