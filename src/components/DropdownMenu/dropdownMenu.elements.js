import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  position: absolute;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  background-color: orange;
`;

export const DropdownWrapper = styled.div`
  height: 90%;
  padding: 5rem 0 0 0;
`;
export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-wdith: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
