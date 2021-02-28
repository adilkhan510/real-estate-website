import React from "react";
import { menuData } from "../../data/MenuData";
import { Button } from "../Utils/Buttons";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
} from "./navBar.elements";

export const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo>Lemonada</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
        <NavBtn>
          <Button to="/contact" primary="true">
            Contact us
          </Button>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};
