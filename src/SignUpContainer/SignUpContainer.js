import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './SignUpContainer.css'

const SignUpContainer = props => {

  return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">It’s time to tame the chaos of payroll, benefits, and HR.</div>
              <form>
                <label className="SignUpContainer-label">First Name:</label>
                <input className="SignUpContainer-input" name="first_name" />
                <label className="SignUpContainer-label">Last Name:</label>
                <input className="SignUpContainer-input" name="last_name"/>
                <label className="SignUpContainer-label">Email:</label>
                <input className="SignUpContainer-input" name="email"/>
                <label className="SignUpContainer-label">Password:</label>
                <input className="SignUpContainer-input" type="password" name="password" />
              </form>
              <button className="button SignUpContainer-button">Close</button>
            </div>
      </React.Fragment>
    )
  console.log("second", props)
}

export default SignUpContainer
