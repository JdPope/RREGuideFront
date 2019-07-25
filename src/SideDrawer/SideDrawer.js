import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './SideDrawer.css'

const SideDrawer = props => {
  console.log("first", props)
  return(
    <nav className="side-drawer">
      <ul>
        <li><Link to={'/AddNewMarker'} className="nav-link">+New Marker</Link></li>
        <li><a href="/">Filter by Candidate</a></li>
        <li><a href="/">Candidate Bios</a></li>
        <li><a href="/">Primary Races</a></li>
        <li><a href="/">Gubernatorial Races</a></li>
        <li><a href="/">Mayoral Races</a></li>
        <li><a href="/">Convention Dates</a></li>
        <li><a href="/">Dog Park Organizers</a></li>
      </ul>
    </nav>



  )
  console.log("second", props)
}

export default SideDrawer
