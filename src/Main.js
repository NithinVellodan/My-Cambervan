import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import styled from "styled-components";

function Main() {
  return (
    <>
      <Navbar />
      <SubContainer>
        <MenuBar>
          <SideBar />
        </MenuBar>
      </SubContainer>
    </>
  );
}

export default Main;

const SubContainer = styled.section`
  display: flex;
`;
const MenuBar = styled.aside`
  width: 7%;
`;
