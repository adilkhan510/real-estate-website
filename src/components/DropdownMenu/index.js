import React from "react";
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownMenu,
  DropdownWrapper,
  DropdownLink,
  BtnWrap,
} from "./dropdownMenu.elements";

import { menuData } from "../../data/MenuData";
import { Button } from "../Utils/Buttons";
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData
            ? menuData.map((data, index) => (
                <DropdownLink to={data.link} key={index}>
                  {data.title}
                </DropdownLink>
              ))
            : "loading..."}
        </DropdownMenu>
        <BtnWrap>
          <Button to="/contact" primary="true" big="true">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
