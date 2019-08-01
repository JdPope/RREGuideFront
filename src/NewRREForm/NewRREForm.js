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
        expectations:[{resp_id:0, expectation_id:0}]
    }
  }
  prepareData = () =>{
    let roles = this.state.roles
    let resps = this.state.responsibilities
    let exp = this.state.expectations

    roles.forEach((role) =>{
      role.responsibilities = []
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
      role.responsibilities.push(resp)
    })
    console.log(roles)

    let rreData = {
      name:this.state.job_name,
      rre: {roles:roles}
    }
    console.log("rre data", rreData)
    let token = localStorage.getItem('jwt')
    console.log(token)
    fetch('http://localhost:3000/jobs',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(rreData)
    }).then(response => response.json())
    .then(response => console.log(response))
  }

  handleChange = (event) => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
  }

  listRoles = () => {
    this.state.roles.map((role) => {

      return <li>some txt to test{role.role_id}</li>
    })
  }

  addRole = (event) => {
    this.setState({roles:[...this.state.roles, {role_id: this.state.roles.length}]})

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

  addResponsibility = (role) => {
    this.setState({responsibilities:[...this.state.responsibilities, {role_id:role, resp_id:this.state.responsibilities.length}]})
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

  addExp = (resp) =>{
    this.setState({expectations:[...this.state.expectations, {resp_id:resp, expectation_id:this.state.expectations.length}]})
  }

  handleExpChange = (event) =>{
    const { name, value} = event.target
    let index = name.substring(12)
    index = parseInt(index)
    let exps = this.state.expectations
    exps = exps.map((exp)=>{
      if (exp.expectation_id == index){
        exp.expectation_name = value
      }
      return exp
    })
    this.setState({
      expectations:exps
    })
  }

  makeExpList = (resp) =>{
    return this.state.expectations
    .filter(
      exp => exp.resp_id == resp.resp_id
    )
    .map((exp)=>{
      return <li>

      <input className="SignUpContainer-input" name={`expectation_${exp.expectation_id}`} onChange={this.handleExpChange} defaultValue={exp.expectation_name} placeholder={`Expectation ${exp.expectation_id+1}`}></input>
      </li>
    })
  }


  makeRespList = (role) =>{
    return this.state.responsibilities
    .filter(
      resp => resp.role_id == role.role_id
    )
    .map((resp) => {
      const expList = this.makeExpList(resp)
      return <li>
      <input className="SignUpContainer-input" name={`resp_${resp.resp_id}`} onChange={this.handleRespChange} defaultValue={resp.resp_name}  placeholder={`Responsibility ${resp.resp_id+1}`}></input>

      <ul>
        <p>Expectations should always be clear, specific, and whenever possible, measurable</p>
        <li>Expectations:
        {expList}
        <button onClick={(e)=> {e.preventDefault();this.addExp(resp.resp_id)}}>+Expectation</button>
        </li>
      </ul>
      </li>
    })
  }


  render(props){
    const rolesList =
      this.state.roles.map((role) => {
        const respList = this.makeRespList(role)
        return <li>
        <label>Role:</label>
        <input className="SignUpContainer-input" name={`role_${role.role_id}`} onChange={this.handleRoleChange} defaultValue={role.role_name}  placeholder={`Role ${role.role_id+1}`}></input>
        <p>Each role has an associated bundle of responsibilities. These responsibilities clearly define the products, services, assets or processes for which we are accountable</p>
        <ul>
          <li>Responsibilities:
          {respList}
          <button onClick={(e) => {e.preventDefault();this.addResponsibility(role.role_id)}}>+Responsibility</button>
          </li>
        </ul>
        </li>
      })

    const { job_name, expectation_name, resp_name, role_name, role_percentage} = this.state
    return(
      <React.Fragment>
            <div className="NewRREContainer">
              <div className="blerb">RRE-G: Success Defined, Simply.</div>
              <div className="desc">Clarify roles, responsibilities, and expectations to inform hiring, reduce work ambiguity, and optimize performance.  </div>
              <form >
                <label>What is your job title?</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="job_name"  placeholder= "Job Title" type="text" defaultValue={job_name}/>
                <p>A role is a description of the position held and the functions performed by an individual</p>
                <ul>
                  {rolesList}
                </ul>
                <button className="rolebutton" onClick={(e) => {e.preventDefault();this.addRole(e)}}>+Role</button>
              </form>
              <button className="newRREbutton" onClick={(e)=> this.prepareData()}>Success!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default NewRREForm
