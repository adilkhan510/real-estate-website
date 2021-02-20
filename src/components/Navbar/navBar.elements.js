import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const NavLink = css`
  color: #fff;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
  height: 60px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
`;

export const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
`;

export const MenuBars = styled.i``;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenuLinks = styled(Link)`
  color: #fff;
  background: #000;
  flex-direction: row;
  ${NavLink};
`;
