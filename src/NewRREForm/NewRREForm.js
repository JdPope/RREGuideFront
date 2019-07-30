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
                <label className="SignUpContainer-label">Job Title:</label>
                <input className="SignUpContainer-input" name="job" required placeholder= "Job Title"/>
                <label className="SignUpContainer-label">Role Name:</label>
                <input className="SignUpContainer-input" name="role" required placeholder= "Role Name"/>
                <label className="SignUpContainer-label">Percentage of Role:</label>
                <input className="SignUpContainer-input"  name="role_percentage" required placeholder= "Role Percentage" type="text"  />
                <label className="SignUpContainer-label">Responsibilities:</label>
                <input className="SignUpContainer-input"  name="Responsibilities" required placeholder= "Responsibility" type="text"  />
                <label className="SignUpContainer-label">Expectations:</label>
                <input className="SignUpContainer-input"  name="expectations" required placeholder= "Expectation" type="text"/>
              </form>
              <button className="signupbutton" >Sign Up!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default NewRREForm
