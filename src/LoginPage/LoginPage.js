import React, { Component } from 'react'
import './LoginPage.css'


class LoginPage extends Component {
  render(){
    return (
      <div>
        <div className="user-search">
          <div id="form">
            <form className="user-login-form">
              <input
                id="email-login"
                name="email"
                placeholder="Enter your email"
              />
              <input
                id="password-login"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            <button className="login-button button" type="submit">Log In</button>
            </form>
            <button  id="create-user-button" className="button">
              Create Account
            </button>
          </div>

            <p id="error">The entered email or password were incorrect. Please try again.</p>

        </div>
      </div>
    )
  }

}

export default LoginPage
