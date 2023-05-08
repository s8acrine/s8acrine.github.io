import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { NavLink } from "react-router-dom";
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggle = () => setDropdownOpen(!dropdownOpen);
const Header = () => {
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink to="/" active>
            Home
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Projects
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>PROJECT</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </>
  );
};

export default Header;
