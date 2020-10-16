//Import required features for this component

import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import {
  NavbarWrapper,
  NavbarCenter,
  NavHeader,
  NavButton,
} from "../elements/NavbarElement"

//Use toggleSidebar funktion to show sidebar if clicking menu button
const Navbar = ({ toggleSidebar}) => {
  return (
    <NavbarWrapper>
      <NavbarCenter>
        <NavHeader>
          <img src={logo} alt="logo" />
          <NavButton type="button" onClick={toggleSidebar}>
            <FaAlignRight />
          </NavButton>
        </NavHeader>
        <PageLinks styleClass="nav-links"></PageLinks>
      </NavbarCenter>
    </NavbarWrapper>
  )
}


export default Navbar
