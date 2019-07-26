import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './SignUpContainer.css'

const SignUpContainer = props => {

  return(
      <React.Fragment>
          <div className="SignUpContainer">
            <div className="modal-main">
              <form>
                <label className="modal-label">First Name:</label>
                <input className="modal-input" name="first_name" />
                <label className="modal-label">Last Name:</label>
                <input className="modal-input" name="last_name"/>
                <label className="modal-label">Bio:</label>
                <textarea className="modal-input" name="bio"/>
                <label className="modal-label">Email:</label>
                <input className="modal-input" name="email"/>
                <label className="modal-label">Password:</label>
                <input className="modal-input" type="password" name="password" />

              </form>

              <button className="button modal-button">Close</button>
            </div>
          </div> :

      </React.Fragment>
    )
  console.log("second", props)
}

export default SignUpContainer
