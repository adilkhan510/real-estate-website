import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import menuBar from "../../images/menuBar.svg";

const NavLink = css`
  color: #fff;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Nav = styled.nav`
  height: 60px;

  display: flex;
  justify-content: space-between;
  /* padding: 1rem 2rem; */
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
  font-weight: bold;
`;

export const MenuBars = styled.li`
  display: none;
  background: url(${menuBar});
  background-size: contain;
  @media screen and (max-width: 762px) {
    display: flex;
    height: 50px;
    width: 50px;
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    transform: translate(-50%, 10%);
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -45px; */
  justify-content: space-between;
  @media screen and (max-width: 762px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink};
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 300px;
  border: 1px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
