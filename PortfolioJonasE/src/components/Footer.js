import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper } from "../elements/FooterElement"
const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div>
          <SocialLinks styleClass="footer-links"></SocialLinks>
          <h4>
            Copyright&copy;{new Date().getFullYear()}
            <span>WebDev</span> all rights reserved
          </h4>
        </div>
      </footer>
    </FooterWrapper>
  )
}

export default Footer
