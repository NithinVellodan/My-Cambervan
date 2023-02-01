import React from "react";
import styled from "styled-components";

// images
import menu from "../assets/menu.svg";
import car from "../assets/car.svg";
import calender from "../assets/calender.svg";
import save from "../assets/save.svg";
import message from "../assets/message.svg";
import { NavLink } from "react-router-dom";
// import car from "../assets/car.svg";

function SideBar() {
  return (
    <MenuList>
      <Item>
        <WidgetAll>
          <NavLinks to="/dashboard">
            <Icon src={menu} alt="menu" />
          </NavLinks>
        </WidgetAll>
      </Item>
      <Item>
        <Widget>
          <NavLinks to="/">
            <Icon src={car} alt="trip" />
          </NavLinks>
        </Widget>
      </Item>
      <Item>
        <WidgetCalender>
          <NavLinks to="/calender">
            <Icon src={calender} alt="calender" />
          </NavLinks>
        </WidgetCalender>
      </Item>
      <Item>
        <WidgetNote>
          <NavLinks to="/note">
            <Icon src={save} alt="save" />
          </NavLinks>
        </WidgetNote>
      </Item>
      <Item>
        <WidgetChat>
          <NavLinks to="/message">
            <Icon src={message} alt="message" />
          </NavLinks>
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
  &:last-child {
    margin-bottom: 0;
  }
  &:first-child {
    margin-top: 10px;
  }
`;
const Widget = styled.div`
  width: 40px;
  display: block;
`;
const WidgetAll = styled.div`
  width: 40px;
  display: block;
`;
const WidgetCalender = styled.div`
  width: 40px;
  display: block;
`;
const WidgetNote = styled.div`
  width: 40px;
  display: block;
`;
const WidgetChat = styled.div`
  width: 40px;
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
const NavLinks = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 5px;
  &.active {
    background: #ffa500bd;
    border-radius: 10px;
    img {
      filter: saturate(0%) contrast(0%) invert(0%) hue-rotate(0%);
    }
  }
`;
