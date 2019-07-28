import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './RREForm.css'

class RREForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }


  handleChange = (event) => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      console.log("handle submit")
      const { username, password } = this.state
      console.log(password)
      this.props.createUser(username, password)
    }


  render(props){
    const { username, password } = this.state
    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">THIS IS THE JOBS PAGE!</div>
              <form >
                <label className="SignUpContainer-label">First Name:</label>
                <input className="SignUpContainer-input" name="first_name" required placeholder= "First Name"/>
                <label className="SignUpContainer-label">Last Name:</label>
                <input className="SignUpContainer-input" name="last_name" required placeholder= "Last Name"/>
                <label className="SignUpContainer-label">User name:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="username" required placeholder= "User Name" type="text" value={username} />
                <label className="SignUpContainer-label">Password:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="password" required placeholder= "Password" type="password" value={password} />
              </form>
              <button className="signupbutton" onClick={this.handleSubmit}>Sign Up!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default RREForm
