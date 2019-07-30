import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import SignIn from './SignIn/SignIn'
import RREContainer from './RREContainer/RREContainer'
import NewRREForm from './NewRREForm/NewRREForm'
import Backdrop from './Backdrop/Backdrop'
import SignUpContainer from './SignUpContainer/SignUpContainer'

import './App.css'
import Hi from './hi'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    sideDrawerOpen: false,
    jobs: [],
    home: true,
    currentId: -1,
    signUpStatus: false
  }
}



componentDidUpdate(prevState) {
  if (this.state.jobs !== prevState.jobs && Object.keys(this.state.jobs).length > 3) {
    console.log("updated")
  }
}

createUser = (username,password) =>{
  console.log("create test")
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({

        username: username,
        password: password

    })
  })
    .then(r => r.json())
    .then(console.log("create test complete"))
}

testUserLogin = (username,password) =>{
  this.setState({home: false})
  console.log("username", username, "password", password)
  const savedToken = localStorage.getItem("jwt")
  fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${savedToken}`
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(response => response.json())
  .then(response => {
    const token = response.token
    localStorage.setItem("jwt", token)
    console.log("token", token)
    fetch('http://localhost:3000/jobs',{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(response => response.json())
    .then(response => this.setState({jobs:[...this.state.jobs, response]})).then(res => console.log("this", this.state.jobs))
 })
}


changeHome = () =>{
  this.setState({home:false})
}

drawerToggleClickHandler = () =>{
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}
  })
}

setSignUpStatus = (event) => {
   this.setState({
     signUpStatus: true
   })
   console.log(this.state.signUpStatus)
 }



backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
}
  render(){
  let sideDrawer;
  let backdrop;
  let newRREForm

  if (this.state.signUpStatus){
    newRREForm = <NewRREForm/>
  }

  if (this.state.sideDrawerOpen){
    sideDrawer = <SignIn testUserLogin={this.testUserLogin}/>
    backdrop =   <Backdrop click={this.backdropClickHandler}/>
  }

console.log("state", this.state.jobs)
  return(

    <Router className="color">
    <div className="app" >
      <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      <main style={{marginTop:'80px'}}>
      {(this.state.home === true)
        ? <SignUpContainer createUser={this.createUser} changeHome={this.changeHome} setSignUpStatus={this.setSignUpStatus}/>
        : null
      }
      {this.state.jobs.length > 0
        ?<Route exact path="/RREContainer/RREContainer" render={(props)=> <RREContainer {...props} jobs={this.state.jobs} /> }/>
        : null }
        <Route exact path="/NewRREForm/NewRREForm" render={(props)=> <NewRREForm /> }/>
        {newRREForm}
      </main>
    </div>
    </Router>
  )
}
}
export default App;
