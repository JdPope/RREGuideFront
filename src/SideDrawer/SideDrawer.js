import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './SideDrawer.css'

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
    <nav className="side-drawer">
      <React.Fragment>
            <div className="sid-drawer">
              <form >

                <label className="SignUpContainer-label">User name:</label>
                <input className="SignUpContainer-input" name="username" required placeholder= "User Name" type="text"  />
                <label className="SignUpContainer-label">Password:</label>
                <input className="SignUpContainer-input"  name="password" required placeholder= "Password" type="password"  />
              </form>
              <button className="signupbutton" >Sign Up!</button>
            </div>
      </React.Fragment>
    </nav>



  )
}
}
export default SideDrawer
