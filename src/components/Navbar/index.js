import React from "react";
import { menuData } from "../../data/MenuData";
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks } from "./navBar.elements";

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
      </NavMenu>
    </Nav>
  );
};
