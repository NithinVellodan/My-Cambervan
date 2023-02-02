import React, { useState } from "react";
import styled from "styled-components";

function Radio() {
  const [select, setSelect] = useState("No Insurance");
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <>
      <InsuranceHeading>Insurance Options</InsuranceHeading>
      <Item1>
        <RadioButton
          type="radio"
          name="radio"
          value="No Insurance"
          checked={select === "No Insurance"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <InsurePolicy>
          <InsuranceLeft>
            <Insure>No Insurance</Insure>
            <InsureContent>No Insurance selected</InsureContent>
          </InsuranceLeft>
          <InsuranceRight>
            <Dollar>$0.00</Dollar>
            <DollarDay>$14/day</DollarDay>
          </InsuranceRight>
        </InsurePolicy>
      </Item1>
      <Item1>
        <RadioButton
          type="radio"
          name="radio"
          value="Collision protection"
          checked={select === "Collision protection"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <InsurePolicy>
          <InsuranceLeft>
            <Insure>Collision protection</Insure>
            <InsureContent>collision on vechile only</InsureContent>
          </InsuranceLeft>
          <InsuranceRight>
            <Dollar>$0.00</Dollar>
            <DollarDay>$14/day</DollarDay>
          </InsuranceRight>
        </InsurePolicy>
      </Item1>
      <Item1>
        <RadioButton
          type="radio"
          name="radio"
          value="Third party"
          checked={select === "Third party"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <InsurePolicy>
          <InsuranceLeft>
            <Insure>Third party</Insure>
            <InsureContent>3rd party insurance only</InsureContent>
          </InsuranceLeft>
          <InsuranceRight>
            <Dollar>$0.00</Dollar>
            <DollarDay>$14/day</DollarDay>
          </InsuranceRight>
        </InsurePolicy>
      </Item1>
    </>
  );
}

export default Radio;

const InsuranceHeading = styled.h4`
  margin-bottom: 40px;
  font-size: 20px;
  font-family: "LatoBold";
  @media all and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 26px;
    margin-top: 17px;
  }
  @media all and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 23px;
    margin-top: 0px;
  }
  @media all and (max-width: 360px) {
    text-align: center;
  }
`;
const Item1 = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  position: relative;
  @media all and (max-width: 1080px) {
    height: 80px;
  }
  @media all and (max-width: 768px) {
    height: 60px;
  }
  @media all and (max-width: 480px) {
    height: 45px;
  }
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 2px solid #bebebe;
  @media all and (max-width: 1080px) {
    top: 30%;
  }
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #fff;
      border: 2px solid grey;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin: 3px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: #FF724A;
      }
    }
  `}
`;
const InsurePolicy = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  width: 80%;
  justify-content: space-between;
`;
const InsuranceLeft = styled.div``;
const Insure = styled.span`
  display: block;
  font-family: "LatoBold";
`;
const InsureContent = styled.p`
  display: block;
  font-family: "LatoBold";
  opacity: 0.5;
  font-size: 15px;
  @media all and (max-width: 1080px) {
    line-height: 1em;
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const InsuranceRight = styled.div`
  text-align: right;
`;
const Dollar = styled.span`
  display: block;
  font-family: "LatoBlack";
`;
const DollarDay = styled.p`
  display: block;
  font-family: "LatoBlack";
  opacity: 0.5;
  font-size: 15px;
  @media all and (max-width: 768px) {
    display: none;
  }
`;
