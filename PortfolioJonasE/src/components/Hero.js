import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import {HeaderHero, CenterHero, InfoHero} from "../elements/HeroElement"


const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {
    file:{
      childImageSharp:{fluid}
    },
   } = useStaticQuery(query);

  return (
  <HeaderHero>
    <CenterHero className="section-center">
      <InfoHero className="hero-info">
        <div className="hero-info">
          <div className="underline">
            <h1>Jonas Eriksson</h1>
            <h4>Systemutvecklare med lite gott och blandat</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </div>

      </InfoHero>
      <Image fluid={fluid} className="hero-img"/>
      </CenterHero>
    </HeaderHero>
  )
}

export default Hero
