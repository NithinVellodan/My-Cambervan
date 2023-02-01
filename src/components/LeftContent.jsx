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
          <BottomLeft>
            <Review>
              <Heading3>Snail the Bigger Campervan</Heading3>
              <ReviewPara>
                <Star>
                  <StarImg
                    alt="star"
                    src={require("../assets/star.svg").default}
                  />
                </Star>
                <Rating>4.8</Rating>
                available in
                <Bold> &nbsp; all location &nbsp;</Bold>
                except genuk
              </ReviewPara>
              <Description>
                All of our campervans for rent are fully- equiped
                custom-built,and hand- painted they,re perfect for long weekend
                getaways,cross country bucket- lisk road trips,and parks tours.
              </Description>
            </Review>
            <Include>
              <Headline>What's Include</Headline>
              <FacilityItems>
                <FacilityItem>
                  <FacilityImage>
                    <FacilityImg
                      alt="bed"
                      src={require("../assets/bed.svg").default}
                    />
                  </FacilityImage>
                  <FacilityContent>Queen bed fit out</FacilityContent>
                </FacilityItem>
                <FacilityItem>
                  <FacilityImage>
                    <FacilityImg
                      alt="room"
                      src={require("../assets/room.svg").default}
                    />
                  </FacilityImage>
                  <FacilityContent>Room single bed</FacilityContent>
                </FacilityItem>
                <FacilityItem>
                  <FacilityImage>
                    <FacilityImg
                      alt="House"
                      src={require("../assets/house.svg").default}
                    />
                  </FacilityImage>
                  <FacilityContent>Guest house</FacilityContent>
                </FacilityItem>
                <FacilityItem>
                  <FacilityImage>
                    <FacilityImg
                      alt="requirements"
                      src={require("../assets/plus.svg").default}
                    />
                  </FacilityImage>
                  <FacilityContent>Addictional requirements</FacilityContent>
                </FacilityItem>
                <FacilityItem>
                  <FacilityImage>
                    <FacilityImg
                      alt="charging"
                      src={require("../assets/battery.svg").default}
                    />
                  </FacilityImage>
                  <FacilityContent>Charging facility</FacilityContent>
                </FacilityItem>
                <FacilityItem>
                  <FacilityImage>
                    <FacilityImg
                      alt="Information"
                      src={require("../assets/info.svg").default}
                    />
                  </FacilityImage>
                  <FacilityContent>Information</FacilityContent>
                </FacilityItem>
              </FacilityItems>
            </Include>
          </BottomLeft>
          <BottomRight>
            
          </BottomRight>
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

const BottomLeft = styled.div`
  width: 48%;
`;
const Review = styled.div`
  margin-bottom: 30px;
  @media all and (max-width: 1440px) {
    margin-bottom: 40px;
  }
  @media all and (max-width: 480px) {
    margin-bottom: 15px;
  }
`;
const Heading3 = styled.h3`
  font-size: 30px;
  font-family: "LatoBold";
  margin-bottom: 15px;
  @media all and (max-width: 1380px) {
    font-size: 27px;
  }
  @media all and (max-width: 1280px) {
    font-size: 23px;
  }
  @media all and (max-width: 980px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
  @media all and (max-width: 768px) {
    font-size: 25px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
  @media all and (max-width: 360px) {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const ReviewPara = styled.p`
  display: flex;
  align-items: center;
  font-family: "LatoBold";
  opacity: 0.5;
  margin-bottom: 18px;
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
  @media all and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
const Star = styled.div`
  margin-right: 8px;
`;
const StarImg = styled.img`
  display: block;
  width: 100%;
`;
const Rating = styled.span`
  font-size: 18px;
  margin-right: 12px;
  color: #000;
  @media all and (max-width: 480px) {
    width: 70%;
  }
`;
const Bold = styled.span`
  color: #000;
  @media all and (max-width: 1280px) {
    display: none;
  }
  @media all and (max-width: 768px) {
    display: block;
  }
`;
const Description = styled.p`
  opacity: 0.7;
  font-family: "LatoBold";
  width: 70%;
  @media all and (max-width: 1440px) {
    width: 100%;
  }
  @media all and (max-width: 1380px) {
    width: 380px;
  }
  @media all and (max-width: 1280px) {
    display: none;
  }
  @media all and (max-width: 480px) {
    display: block;
    width: 100%;
  }
`;
const Include = styled.div`
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const Headline = styled.h4`
  font-size: 20px;
  font-family: "LatoBold";
  opacity: 0.8;
  margin-bottom: 20px;
  @media all and (max-width: 1440px) {
    margin-bottom: 25px;
  }
  @media all and (max-width: 1280px) {
    margin-bottom: 35px;
    font-size: 25px;
  }
`;
const FacilityItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const FacilityItem = styled.li`
  display: flex;
  align-items: center;
  width: 48%;
  margin-bottom: 10px;
  @media all and (max-width: 1440px) {
    width: 50%;
    margin-bottom: 25px;
  }
  @media all and (max-width: 1280px) {
    width: 90%;
  }
  @media all and (max-width: 768px) {
    width: 50%;
    margin-bottom: 20px;
  }
`;
const FacilityImage = styled.div`
  margin-right: 10px;
  background-color: #fe917230;
  padding: 8px;
  border-radius: 10px;
  @media all and (max-width: 1280px) {
    width: 45px;
  }
  @media all and (max-width: 768px) {
    width: 40px;
  }
`;
const FacilityImg = styled.img`
  display: block;
  width: 100%;
`;
const FacilityContent = styled.span`
  display: inline-block;
  font-family: "LatoBold";
`;
const BottomRight = styled.div``;
