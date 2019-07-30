import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './NewRREForm.css'

class NewRREForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

  render(props){

    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">Make Job Definition Easy with RRE!</div>
              <form >
                <label className="SignUpContainer-label">First Name:</label>
                <input className="SignUpContainer-input" name="first_name" required placeholder= "First Name"/>
                <label className="SignUpContainer-label">Last Name:</label>
                <input className="SignUpContainer-input" name="last_name" required placeholder= "Last Name"/>
                <label className="SignUpContainer-label">User name:</label>
                <input className="SignUpContainer-input"  name="username" required placeholder= "User Name" type="text"  />
                <label className="SignUpContainer-label">Password:</label>
                <input className="SignUpContainer-input"  name="password" required placeholder= "Password" type="password"  />
              </form>
              <button className="signupbutton" >Sign Up!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default NewRREForm
