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

// const Navbar = ({toggleSidebar}) => {
//   return (
//   <nav className="navbar">
//     <div className="nav-center">
//       <div className="nav-header">
//         <img src={logo} alt="logo"/>
//         <button type="button" className="toggle-btn" onClick={toggleSidebar}>
//           <FaAlignRight></FaAlignRight>
//         </button>
//       </div>
//       <PageLinks styleClass="nav-links"></PageLinks>
//     </div>
//   </nav>
//   )
// }

export default Navbar
