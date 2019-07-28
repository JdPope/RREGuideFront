import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './SignIn.css'

class SideDrawer extends Component {
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
            <div className="side-drawer">
              <form >
                <label className="SignUpContainer-label">User name:</label>
                <input className="SignUpContainer-input" name="username" required placeholder= "User Name" type="text"  />
                <label className="SignUpContainer-label">Password:</label>
                <input className="SignUpContainer-input"  name="password" required placeholder= "Password" type="password"  />
              </form>
              <button className="signupbutton" >Sign In!</button>
              <button onClick={this.props.testUserLogin}>Login Test</button>
            </div>
      </React.Fragment>

  )
}
}
export default SideDrawer
