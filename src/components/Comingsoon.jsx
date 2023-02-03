import React from "react";
import styled from "styled-components";

function Comingsoon() {
  return (
    <Container>
      <ComingSoonImage src={require("../assets/comingsoon.jpg")} alt="Coming" />
    </Container>
  );
}

export default Comingsoon;
const Container = styled.section`
  margin:  0 auto;
  width: 30%;
  background-color: aliceblue;
`;

const ComingSoonImage = styled.img`
margin-top: -500px;
  width: 100%;
  display: block;
`;
