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
        responsibilities:[{resp_id:0, role_id:0}],
        expectations:[{resp_id:0, exp_id:0}]
    }
  }
  prepareData = () =>{
    let roles = this.state.roles
    let resps = this.state.responsibilities
    let exp = this.state.expectations

    roles.forEach((role) =>{
      role.responsibities = []
    })

    resps.forEach((resp) =>{
      resp.expectations = []
    })

    exp.forEach((exp) =>{
      let resp = resps.filter((resp) =>{
        return resp.resp_id == exp.resp_id
      })[0]
      resp.expectations.push(exp)
    })

    resps.forEach((resp) =>{
      let role = roles.filter((role) =>{
        return role.role_id == resp.role_id
      })[0]
      role.responsibities.push(resp)
    })
    console.log(roles)

    let rreData = {
      job_name:this.state.job_name,
      rre: {roles:roles}
    }
    console.log("rre data", rreData)
    // iterate over roles array, and add an empty 'resp' array to each
    // iterate over responsibities array, add an empty 'expectations' array to each
    // iterate over expectations array- then add the expectation to the expectations array in the responsibilities entry with the same resp_id
    // do the same for responsibilities adding to the roles' array


  }
  addRole = (event) => {
    this.setState({roles:[...this.state.roles, {role_id: this.state.roles.length}]})

  }

  addResponsibility = (role) => {
    this.setState({responsibilities:[...this.state.responsibilities, {role_id:role, resp_id:this.state.responsibilities.length}]})
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

  handleRespChange = (event) =>{
    const { name, value } = event.target
    let index = name.substring(5)
    index = parseInt(index)
    let resps = this.state.responsibilities
    resps = resps.map((resp)=>{
      if (resp.resp_id == index){
        resp.resp_name = value
      }
      return resp
    })
    this.setState({
      responsibilities:resps
    })
  }

  makeRespList = (role) =>{
    return this.state.responsibilities
    .filter(
      resp => resp.role_id == role.role_id
    )
    .map((resp) => {
      return <li>
      <input name={`resp_${resp.resp_id}`} onChange={this.handleRespChange} defaultValue={resp.resp_name}  placeholder={resp.resp_id}></input>
      </li>
    })
  }

  render(props){
    const rolesList =
      this.state.roles.map((role) => {
        const respList = this.makeRespList(role)
        return <li>
        <input name={`role_${role.role_id}`} onChange={this.handleRoleChange} defaultValue={role.role_name}  placeholder={role.role_id}></input>
        <ul>
          <li>Responsibilities<button onClick={(e) => {e.preventDefault();this.addResponsibility(role.role_id)}}>+Responsibility</button></li>
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
              <button className="signupbutton" onClick={(e)=> this.prepareData()} >Submit form!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default NewRREForm
