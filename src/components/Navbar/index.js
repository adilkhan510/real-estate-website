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

export const Navbar = () => {
  return (
    <Nav>
      <Logo>Lemonada</Logo>
      <MenuBars />
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
