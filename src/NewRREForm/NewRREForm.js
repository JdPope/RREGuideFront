import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './NewRREForm.css'

class NewRREForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      job_id:1,
      job_name:"",
        roles:[]
    }
  }

  handleChange = (event) => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
  }

  render(props){
    const { job_name, expectation_name, resp_name, role_name, role_percentage} = this.state
    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">Make Role Definition Easy with RRE!</div>
              <form >
                <label className="SignUpContainer-label">Job Title:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="job_name" required placeholder= "Job Title" type="text" defaultValue={job_name}/>
                <label className="SignUpContainer-label">Role Name:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="role" required placeholder= "Role Name" type="text" value={role_name}/>
                <label className="SignUpContainer-label">Percentage of Role:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="role_percentage" required placeholder= "Role Percentage" type="text" value={role_percentage} />
                <label className="SignUpContainer-label">Responsibilities:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="Responsibilities" required placeholder= "Responsibility" type="text" value={resp_name}  />
                <label className="SignUpContainer-label">Expectations:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="expectations_name" required placeholder= "Expectation" type="text" value={expectation_name}  />

              </form>
              <button className="signupbutton" onClick={(e)=> console.log("chris state", this.state)} >Submit form!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default NewRREForm
