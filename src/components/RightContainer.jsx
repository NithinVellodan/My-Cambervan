import React from "react";
import styled from "styled-components";

function RightContent() {
  return (
    <>

      <RightContainer>
        <Rent>
          <RentHeader>Rent Details</RentHeader>
          <RentItems>
            <RentItem>
              <Up>Pick Up</Up>
              <Down>
                <LFT>Sampangan</LFT>
                <RGT>29/11/2021 - 07:00AM</RGT>
              </Down>
            </RentItem>
            <RentItem>
              <Up>Drop Off</Up>
              <Down>
                <LFT>Sumatra</LFT>
                <RGT>1/12/2021 - 09:00PM</RGT>
              </Down>
            </RentItem>
            <RentItem>
              <Up>Daily Rate</Up>
              <Down>
                <LFT>3 days@ $33.00</LFT>
                <RGT>$99.00</RGT>
              </Down>
            </RentItem>
          </RentItems>
          <HR />
          <RentChargeLists>
            <RentChargeList>
              <Charge>Estimated Milage Charge</Charge>
              <Rate>$120.00</Rate>
            </RentChargeList>
            <RentChargeList>
              <Charge>No worries on the vechile</Charge>
              <Rate>$52.00</Rate>
            </RentChargeList>
            <RentChargeList>
              <Charge>Sales Tax</Charge>
              <Rate>$10.00</Rate>
            </RentChargeList>
            <RentChargeList>
              <LastCharge>Total</LastCharge>
              <LastRate>$151.00</LastRate>
            </RentChargeList>
          </RentChargeLists>
          <RentButton>Rent Now</RentButton>
        </Rent>
        <MoreDetails>
          <More>More Campervan</More>
          <View>View more</View>
        </MoreDetails>
        <Last>
          <LastImage>
            <LastImg alt="image" src={require("../assets/last-image.jpg")} />
          </LastImage>
        </Last>
      </RightContainer>
      ;
    </>
  );
}

export default RightContent;



const RightContainer = styled.div`
    width: 30%;
    margin-left: 20px;
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const Rent = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 25px;
`;
const RentHeader = styled.h4`
    text-align: center;
    background: #ebebff;
    width: 40%;
    margin: 0 auto;
    padding: 18px;
    font-family: "LatoBlack";
    opacity: 0.9;
    font-size: 18px;
    border-radius: 25px;
    @media all and (max-width: 1440px) {
        width: 45%;
        padding: 14px;
    }
    @media all and (max-width: 1380px) {
        width: 50%;
    }
    @media all and (max-width: 1280px) {
        width: 65%;
        padding: 12px;
        font-size: 14px;
    }
`;
const RentItems = styled.ul`
    margin-top: 25px;
    @media all and (max-width: 1440px) {
        margin-top: 20px;
    }
`;
const RentItem = styled.li`
    margin-bottom: 24px;
    &:last-child div small {
        @media all and (max-width: 1280px) {
            display: block;
        }
    }
`;
const Up = styled.h5`
    font-family: "LatoBold";
    font-size: 19px;
    opacity: 0.7;
    margin-bottom: 14px;
    @media all and (max-width: 1440px) {
        margin-bottom: 10px;
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 5px;
        font-size: 20px;
    }
`;
const Down = styled.div`
    display: flex;
    justify-content: space-between;
    opacity: 0.3;
`;
const LFT = styled.span`
    font-family: "LatoBold";
    font-size: 17px;
    display: block;
    @media all and (max-width: 1280px) {
        font-size: 16px;
    }
`;
const RGT = styled.small`
    font-family: "LatoBold";
    font-size: 17px;
    display: block;
    @media all and (max-width: 1280px) {
        display: none;
    }
`;
const HR = styled.hr`
    border-top: 1px solid #000;
    margin-bottom: 25px;
    @media all and (max-width: 1440px) {
        margin-top: 40px;
    }
    @media all and (max-width: 1280px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;
const RentChargeLists = styled.ul``;
const RentChargeList = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    @media all and (max-width: 1440px) {
        margin-bottom: 12px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 30px;
    }
    &:last-child {
        margin-top: 35px;
        @media all and (max-width: 1440px) {
            margin-top: 30px;
        }
    }
`;
const Charge = styled.p`
    font-family: "LatoBold";
    opacity: 0.4;
    @media all and (max-width: 1280px) {
        line-height: 1em;
    }
`;
const Rate = styled.span`
    display: block;
    font-family: "LatoBold";
    opacity: 0.6;
`;
const LastCharge = styled.p`
    font-family: "LatoBold";
    opacity: 1;
    font-size: 20px;
`;
const LastRate = styled.span`
    display: block;
    font-family: "LatoBold";
    opacity: 0.8;
    font-size: 18px;
`;
const RentButton = styled.div`
    text-align: center;
    background: #ff724a;
    width: 95%;
    margin: 0 auto;
    margin-top: 40px;
    padding: 18px;
    font-family: "LatoBold";
    opacity: 0.9;
    font-size: 17px;
    color: #fff;
    border-radius: 25px;
    @media all and (max-width: 1440px) {
        margin-top: 30px;
    }
    @media all and (max-width: 1280px) {
        width: 90%;
        padding: 15px;
    }
`;
const MoreDetails = styled.div`
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1440px) {
        margin: 15px 0;
    }
    @media all and (max-width: 1280px) {
        margin: 33px 0;
    }
`;
const More = styled.small`
    font-family: "LatoBold";
    font-size: 20px;
    opacity: 0.8;
`;
const View = styled.small`
    font-family: "LatoBold";
    font-size: 15px;
    opacity: 0.6;
`;
const Last = styled.div``;
const LastImage = styled.div`
    width: 99%;
    margin: 0 auto;
`;
const LastImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;
// const SliderBox = styled.div`
//     position: absolute;
//     z-index: 100;
//     right: 400px;
//     top: 35%;
//     @media all and (max-width: 1080px) {
//        right: 330px;
//     }
//     @media all and (max-width: 980px) {
//         right: 60px;
//     }
//     @media all and (max-width: 640px) {
//         right: 43px;
//     }
// `;
