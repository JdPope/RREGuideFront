import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './NewRREForm.css'

class NewRREForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
        rre:{
          role_id:1,
          role_percentage:"",
          role_name:"",
          responsibilities:[
            {resp_id:1, resp_name:"", expectations:[
              { expectation_id:1, expectation_name:""}
              ]
            }
          ]
        }
    }
  }

  handleChange = (event) => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
  }

  render(props){
    const { expectation_name, resp_name, role_name, role_percentage} = this.state
    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">Make Role Definition Easy with RRE!</div>
              <form >
                <label className="SignUpContainer-label">Job Title:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="job" required placeholder= "Job Title" type="text"/>
                <label className="SignUpContainer-label">Role Name:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="role" required placeholder= "Role Name" type="text" value={role_name}/>
                <label className="SignUpContainer-label">Percentage of Role:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="role_percentage" required placeholder= "Role Percentage" type="text" value={role_percentage} />
                <label className="SignUpContainer-label">Responsibilities:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="Responsibilities" required placeholder= "Responsibility" type="text" value={resp_name}  />
                <label className="SignUpContainer-label">Expectations:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="expectations_name" required placeholder= "Expectation" type="text" value={expectation_name}  />
              </form>
              <button className="signupbutton" >Sign Up!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default NewRREForm
