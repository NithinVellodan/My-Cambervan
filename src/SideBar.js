import React from "react";
import styled from "styled-components";

function SideBar() {
  return (
    <MenuList>
      <Item>
        <WidgetAll>
          <Icon src={require("../src/assets/menu.svg").default} alt="menu" />
        </WidgetAll>
      </Item>
      <Item>
        <Widget>
          <Icon src={require("../src/assets/car.svg").default} alt="trip" />
        </Widget>
      </Item>
      <Item>
        <WidgetCalender>
          <Icon
            src={require("../src/assets/calender.svg").default}
            alt="calender"
          />
        </WidgetCalender>
      </Item>
      <Item>
        <WidgetNote>
          <Icon src={require("../src/assets/save.svg").default} alt="save" />
        </WidgetNote>
      </Item>
      <Item>
        <WidgetChat>
          <Icon
            src={require("../src/assets/message.svg").default}
            alt="message"
          />
        </WidgetChat>
      </Item>
    </MenuList>
  );
}

export default SideBar;

const MenuList = styled.ul`
  width: 30%;
  margin: 0 auto;
`;
const Item = styled.li`
  margin-bottom: 80px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  &:first-child {
    margin-top: 10px;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: -5px;
    width: 40px;
    height: 42px;
    background-color: #fe91727d;
    border-radius: 12px;
    z-index: -1;
    display: none;
  }
  &:hover::after {
    display: block;
  }
`;
const Widget = styled.div`
  width: 30px;
  display: block;
`;
const WidgetAll = styled.div`
  width: 30px;
  display: block;
`;
const WidgetCalender = styled.div`
  width: 30px;
  display: block;
`;
const WidgetNote = styled.div`
  width: 30px;
  display: block;
`;
const WidgetChat = styled.div`
  width: 30px;
  display: block;
`;
const Icon = styled.img`
  display: block;
  width: 100%;
  filter: grayscale();
  &:hover {
    filter: none;
  }
`;
