import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import './Navbar.css'
import ToggleButton from '../ToggleButton/ToggleButton'

const Navbar = props =>{

return(
  <header className="Navbar">
    <nav className="Navbar_nav">

      <div className="Navbar_logo"><a href="/">RRE Generator</a></div>
      <div className="filler">Why RRE-G?</div>
      <div className="filler">Pricing</div>
      <div className="filler">Our Partners</div>
      <div className="filler">Resources</div>
      <div className="spacer"/>
      <div>

      </div>

      <div className="Navbar_items">

        <ul>
          <li className="nav-link" onClick={props.drawerClickHandler}>Sign In</li>
        </ul>
      </div>
    </nav>
  </header>
)
}

export default Navbar
