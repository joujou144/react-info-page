import React from "react"
import logoSmall from "./images/react-icon-small.png"

export default function Navbar() {
  return (
    <nav>
      <img src={logoSmall} alt="react-logo" className="nav-logo" />
      <h3 className="logo-title">ReactFacts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  )
}