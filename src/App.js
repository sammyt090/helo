import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import location from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from './Components/Nav/Nav'
import Auth from './Components/Auth/Auth'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Form from './Components/Form/Form'
// import Post from './Components/Post/Post'

function App() {
  // console.log(this.props.location)
  return (
    <div className="App">
      {/* {props.location ? <Auth/> : <Nav/>} */}
      {routes}
      <Nav />
       {/* <Nav/>
   
    <Auth/>
    <Dashboard/>
    <Form/>
    <Post/> */}
    
    </div>
  );
}

export default App;
