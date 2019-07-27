import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './SignUpContainer.css'

class SignUpContainer extends Component {


  render(props){
    return(
      <React.Fragment>
            <div className="SignUpContainer-main">
              <div className="blerb">It’s time to tame the chaos of payroll, benefits, and HR.</div>
              <form onSubmit={this.handleSubmit}>
                <label className="SignUpContainer-label">First Name:</label>
                <input className="SignUpContainer-input" name="first_name" />
                <label className="SignUpContainer-label">Last Name:</label>
                <input className="SignUpContainer-input" name="last_name"/>
                <label className="SignUpContainer-label">Email:</label>
                <input className="SignUpContainer-input" name="email"/>
                <label className="SignUpContainer-label">Password:</label>
                <input className="SignUpContainer-input" type="password" name="password" />
              </form>
              <button onClick={this.props.testUserCreate}>Create Test</button>
            </div>
      </React.Fragment>
    )
    }
}

export default SignUpContainer
