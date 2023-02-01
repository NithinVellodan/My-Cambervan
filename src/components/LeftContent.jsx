import React from "react";
import styled from "styled-components";

function LeftContent() {
  return (
    <MainContainer>
      <LeftContainer>
        <TopContainer>
          <MainImgContainer>
            <ImgCon>
              <BigImg
                src={require("../assets/big-image.jpg")}
                alt="main-image"
              />
            </ImgCon>
          </MainImgContainer>
          <SubImgContainer>
            <ContainerImage>
              <ContainerImg
                src={require("../assets/top-image.jpg")}
                alt="car-image"
              />
            </ContainerImage>
            <ContainerImage>
              <ContainerImg
                src={require("../assets/bottom-image.jpg")}
                alt="car-image"
              />
            </ContainerImage>
          </SubImgContainer>
        </TopContainer>
        <BottomContainer>
            
        </BottomContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </MainContainer>
  );
}

export default LeftContent;
const MainContainer = styled.div`
  width: 75%;

  background: #fff;
  border-radius: 15px;
`;
const LeftContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
`;

const RightContainer = styled.div``;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BottomContainer = styled.div``;
const MainImgContainer = styled.div`
  width: 75%;
`;
const SubImgContainer = styled.ul`
  width: 25%;
`;
const ContainerImage = styled.li`
  width: 100%;
  &:nth-child(2) {
    margin-top: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      background: #312e2e99;
      border-radius: 15px;
      height: 100%;
      margin: 0 auto;
      color: #fff;
    }
    &::after {
      content: "10+ Photos";
      position: absolute;
      top: 50%;
      left: 35%;
      color: #fff;
      font-family: "LatoBold";
    }
  }
`;
const ContainerImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 15px;
`;
const BigImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
const ImgCon = styled.div`
  width: 95%;
  height: 92%;
`;
