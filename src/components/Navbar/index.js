import React from "react";
import { Nav, Logo, MenuBars, NavMenu } from "./navBar.elements";

export const Navbar = () => {
  return (
    <Nav>
      <Logo>Lemonada</Logo>
      <MenuBars />
      <NavMenu></NavMenu>
    </Nav>
  );
};
