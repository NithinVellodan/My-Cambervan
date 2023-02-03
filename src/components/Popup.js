import React from "react";
import styled from "styled-components";

function Popup() {
  return <Div>
    
  </Div>;
}

export default Popup;

const Div = styled.div`
  width: 500px;
  height: 500px;
  border: 2px solid #fff;
  background: #4b4b4ba8;
  border-radius: 20px;
  @media all and (max-width: 1080px) {
    height: 300px;
  }
  @media all and (max-width: 640px) {
    width: 400px;
  }
  @media all and (max-width: 480px) {
    width: 300px;
    height: 230px;
  }
`;
