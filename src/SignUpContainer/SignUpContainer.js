import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
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
      const { username, password } = this.state
      this.props.createUser(username, password)
    }


  render(props){
    const { username, password } = this.state
    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">It’s time to tame the chaos of payroll, benefits, and HR.</div>
              <form onSubmit={this.handleSubmit}>
                <label className="SignUpContainer-label">First Name:</label>
                <input className="SignUpContainer-input" name="first_name" />
                <label className="SignUpContainer-label">Last Name:</label>
                <input className="SignUpContainer-input" name="last_name"/>
                <label className="SignUpContainer-label">User name:</label>
                <input className="SignUpContainer-input" onChange={this.handleChange} name="username" required placeholder= "User Name" type="text" value={username} />
                <label className="SignUpContainer-label">Password:</label>
                <input className="SignUpContainer-input" type="password" name="password" />
              </form>
              <button onClick={this.props.createUser}>Create Test</button>
            </div>
      </React.Fragment>
    )
    }
}

export default SignUpContainer
