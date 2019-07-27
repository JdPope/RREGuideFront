import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import SideDrawer from './SideDrawer/SideDrawer'

import Backdrop from './Backdrop/Backdrop'
import LoginPage from './LoginPage/LoginPage'
import SignUpContainer from './SignUpContainer/SignUpContainer'
import './App.css'


class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    sideDrawerOpen: false,
    markers: [],
    currentId: -1
  }
}


createUser = () =>{
  console.log("create test")
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({

        username: 'gal',
        password: 'yo'

    })
  })
    .then(r => r.json())
    .then(console.log("create test complete"))
}

testUserLogin = () =>{
  console.log("login test")
  const savedToken = localStorage.getItem("jwt")
  fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${savedToken}`
    },
    body: JSON.stringify({
      username: 'guy',
      password: 'hi'
    })
  }).then(response => response.json())
  .then(response => {
    const token = response.token
    console.log("r", response)
    localStorage.setItem("jwt", token)
    console.log("token", token)
  }).then(console.log("Login test complete"))
}




drawerToggleClickHandler = () =>{
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}
  })
}

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
}
  render(){
  let sideDrawer;
  let backdrop;

  if (this.state.sideDrawerOpen){
    sideDrawer = <SideDrawer/>
    backdrop =   <Backdrop click={this.backdropClickHandler}/>
  }


  return(
    <Router className="color">

    <div className="app" style={{color: 'purple'}}>
      <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      <main style={{marginTop:'80px'}}>
      <Route exact path="/LoginPage" render={(props)=> <LoginPage /> }/>
      <SignUpContainer createUser={this.createUser}/>
      <button onClick={this.testUserLogin}>Login Test</button>
      </main>
    </div>

    </Router>
  )
}
}
export default App;
