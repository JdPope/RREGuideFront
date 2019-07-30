import React, {Component} from 'react'
import { BrowserRouter as Router,Link, Redirect } from 'react-router-dom';
import './SignUpContainer.css'

class SignUpContainer extends Component {

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
         this.props.changeHome()
       }

  render(props){
    const { username, password } = this.state
    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">Job definition is hard...We're here to help.</div>
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
              <button className="signupbutton" onClick={(e) => {this.handleSubmit(e);this.props.setSignUpStatus(e)}}>Sign Up!</button>
            </div>
      </React.Fragment>
    )
    }
}

export default SignUpContainer
