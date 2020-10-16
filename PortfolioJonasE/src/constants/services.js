// Create constants which can be imported wherever it is needed for easy acess.

import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Webutveckling",
    text: `Jag är ute efter att utveckla smidiga & funktionella webbapplikationer`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Backend",
    text: `Den motor som gör allting möjligt behöver tydliga funktioner och väl planerat system.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Databasutvecklare",
    text: `För att intergrera backend med frontend behöver databasstrukturen vara uppbyggd på det sätt att det är lätt-tillgängligt!`,
  },
]
