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
      const { username, password } = this.state
      console.log(password)
      this.props.testUserLogin(username, password)
    }


  render(props){
    const { username, password } = this.state
    return(
      <React.Fragment>
            <div className="side-drawer">
              <form >
                <input className="SignUpContainer-input"onChange={this.handleChange} name="username" required placeholder= "User Name" type="text" value={username}/>
                <input className="SignUpContainer-input"   onChange={this.handleChange} name="password" required placeholder= "Password" type="password" value={password} />
              </form>
              <button className="signupbutton" >Sign In!</button>
              <button onClick={this.handleSubmit}>Login Test</button>
            </div>
      </React.Fragment>

  )
}
}
export default SideDrawer
