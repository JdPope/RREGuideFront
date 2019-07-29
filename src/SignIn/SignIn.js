import React, {Component} from 'react'
import { BrowserRouter as Router,Link, Redirect} from 'react-router-dom';
import './SignIn.css'

class SideDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      username: "",
      password: ""
    }
  }
  setRedirect = (event) => {
     this.setState({
       redirect: true
     })
     this.renderRedirect()
   }
   renderRedirect = () => {
     if (this.state.redirect) {
       return <Redirect to='/RREContainer/RREContainer' />
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
            {this.renderRedirect()}
              <form >
                <input className="SignUpContainer-input"onChange={this.handleChange} name="username" required placeholder= "User Name" type="text" value={username}/>
                <input className="SignUpContainer-input"   onChange={this.handleChange} name="password" required placeholder= "Password" type="password" value={password} />
              </form>
              <button className="signupbutton" onClick={(e) => {this.handleSubmit(e);this.setRedirect(e)}}>Sign In!</button>
            </div>
      </React.Fragment>

  )
}
}
export default SideDrawer
