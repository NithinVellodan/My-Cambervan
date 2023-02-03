import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import Radio from "./Radio";

function LeftContent() {
  const [pop, setPop] = useState(false);
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
            <ContainerImage
              onClick={() => {
                if (true === Boolean(pop)) {
                  setPop(false);
                } else {
                  setPop(true);
                }
              }}
            >
              <ContainerImg
                src={require("../assets/bottom-image.jpg")}
                alt="car-image"
              />
            </ContainerImage>

            {pop && (
              <>
                <div
                  onClick={() => {
                    setPop(false);
                  }}
                  style={{
                    position: "fixed",
                    right: "0%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    zIndex: "10",
                    bottom: "0%",
                  }}
                ></div>
                <SliderBox>
                  <Popup />
                </SliderBox>
              </>
            )}
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
            <Owner>
              <OwnerTitle>Owner</OwnerTitle>
              <OwnerDetails>
                <OwnerBio>
                  <OwnerImage>
                    <OwnerImg
                      alt="owner"
                      src={require("../assets/owner-avatar.jpg")}
                    />
                  </OwnerImage>
                  <OwnerId>
                    <OwnerName>Charlie Septimus</OwnerName>
                    <OwnerUserName>@chatliesetimusvan</OwnerUserName>
                  </OwnerId>
                </OwnerBio>
                <OwnerContactDetails>
                  <OwnerMessage>
                    <MessageImg
                      alt="message"
                      src={require("../assets/message-fill.svg").default}
                    />
                  </OwnerMessage>
                  <OwnerPhone>
                    <PhoneImg
                      alt="phone"
                      src={require("../assets/call.svg").default}
                    />
                  </OwnerPhone>
                </OwnerContactDetails>
              </OwnerDetails>
            </Owner>
            <InsuranceDetails>
              {" "}
              <Radio />
            </InsuranceDetails>
          </BottomRight>
        </BottomContainer>
      </LeftContainer>
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

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
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
const BottomRight = styled.div`
  width: 35%;
  /* margin-right: 30%; */
`;

//leftRightContainer////////////////////////////////

// const RightL = styled.div``;
const Owner = styled.div`
  margin-bottom: 95px;
  @media all and (max-width: 1440px) {
    margin-top: 25px;
    margin-bottom: 100px;
  }
  @media all and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 0;
  }
  @media all and (max-width: 768px) {
    width: 40%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
  @media all and (max-width: 480px) {
    margin-bottom: 30px;
    margin-top: 0;
  }
`;
const OwnerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const OwnerTitle = styled.h4`
  font-size: 25px;
  font-family: "LatoBold";
  margin-bottom: 12px;
  @media all and (max-width: 1440px) {
    font-size: 28px;
  }
  @media all and (max-width: 1280px) {
    font-size: 25px;
  }
  @media all and (max-width: 768px) {
    font-size: 30px;
  }
  @media all and (max-width: 480px) {
    font-size: 25px;
  }
`;
const OwnerBio = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
  }
  @media all and (max-width: 480px) {
    width: 80%;
  }
`;
const OwnerImage = styled.div`
  width: 18%;
  margin-right: 10px;
  @media all and (max-width: 1440px) {
    width: 22%;
  }
  @media all and (max-width: 1280px) {
    width: 45%;
    margin-bottom: 20px;
  }
  @media all and (max-width: 480px) {
    width: 25%;
    margin-bottom: 0;
  }
`;
const OwnerImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;
const OwnerId = styled.div``;
const OwnerName = styled.h2`
  font-size: 20px;
  font-family: "LatoBold";
  margin-bottom: 10px;
  @media all and (max-width: 1440px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media all and (max-width: 1280px) {
    font-size: 20px;
  }
  @media all and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 0;
  }
  @media all and (max-width: 480px) {
    font-size: 15px;
  }
`;
const OwnerUserName = styled.blockquote`
  font-size: 18px;
  font-family: "LatoBold";
  opacity: 0.4;
  @media all and (max-width: 1440px) {
    font-size: 16px;
  }
  font-size: 14px;
`;
const OwnerContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  @media all and (max-width: 1280px) {
    width: 38%;
  }
  @media all and (max-width: 768px) {
    margin-top: 25px;
  }
  @media all and (max-width: 768px) {
    width: 50%;
  }
  @media all and (max-width: 480px) {
    width: 35%;
    margin-top: 15px;
  }
`;

const OwnerMessage = styled.div`
  width: 45%;
  background: #ff724a66;
  padding: 10px;
  border-radius: 15px;
  @media all and (max-width: 1440px) {
    width: 48%;
  }
`;
const MessageImg = styled.img`
  display: block;
  width: 100%;
`;
const OwnerPhone = styled.div`
  width: 45%;
  background: #379e635e;
  padding: 10px;
  border-radius: 15px;
  @media all and (max-width: 1440px) {
    width: 48%;
  }
`;
const PhoneImg = styled.img`
  display: block;
  width: 100%;
`;
const InsuranceDetails = styled.div`
  width: 100%;
  @media all and (max-width: 768px) {
    width: 60%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const SliderBox = styled.div`
  position: absolute;
  z-index: 100;
  right: 400px;
  top: 35%;
  @media all and (max-width: 1080px) {
    right: 330px;
  }
  @media all and (max-width: 980px) {
    right: 60px;
  }
  @media all and (max-width: 640px) {
    right: 43px;
  }
`;
// const LeftContainerRight = styled.div`
//   width: 30%;
//   margin-left: 20px;
//   @media all and (max-width: 980px) {
//     display: none;
//   }
// `;
