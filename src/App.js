import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import LoginPage from './LoginPage'
import './App.css'
import {BrowserRouter as Router, Route,Link } from 'react-router-dom'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    sideDrawerOpen: false,
    markers: [],
    currentId: -1
  }
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
      </main>
    </div>

    </Router>
  )
}
}
export default App;
