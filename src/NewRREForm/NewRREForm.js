import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './NewRREForm.css'

class NewRREForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      job_id:1,
      job_name:"",
        roles:[{role_id:0}],
        responsibilities:[{resp_id:0, role_id:0}]
    }
  }

  addRole = (event) => {
    this.setState({roles:[...this.state.roles, {role_id: this.state.roles.length}]})

  }



  listRoles = () => {
    this.state.roles.map((role) => {

      return <li>some txt to test{role.role_id}</li>
    })
  }

  handleChange = (event) => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
  }

  handleRoleChange = (event) =>{
    const { name, value } = event.target
    let index = name.substring(5)
    index = parseInt(index)
    let roles = this.state.roles
    roles[index] = {
      role_id:index,
      role_name: value}
    this.setState({
      roles:roles
    })
  }


  render(props){
    const rolesList =
      this.state.roles.map((role) => {
        const respList = makeRespList(role)
        return <li>
        <input name={`role_${role.role_id}`} onChange={this.handleRoleChange} defaultValue={role.role_name}  placeholder={role.role_id}></input>
        <ul>
          {respList}
        </ul>
        </li>
      })

    const { job_name, expectation_name, resp_name, role_name, role_percentage} = this.state
    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">Make Role Definition Easy with RRE!</div>
              <form >
                <label className="SignUpContainer-label">Job Title:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="job_name"  placeholder= "Job Title" type="text" defaultValue={job_name}/>
                <ul>
                  {rolesList}
                </ul>
                <button onClick={(e) => {e.preventDefault();this.addRole(e)}}>+ Role</button>

              </form>
              <button className="signupbutton" onClick={(e)=> console.log("chris state", this.state)} >Submit form!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default NewRREForm
