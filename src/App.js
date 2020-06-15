import React from 'react';
import './App.css';
import routes from './routes'
// import location from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from './Components/Nav/Nav'
// import Auth from './Components/Auth/Auth'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Form from './Components/Form/Form'
// import Post from './Components/Post/Post'

function App(props) {
  // const showNav = () => {
  //   if(this.props.location === '/'){
  //     return <Nav/>   
  //   }
  // }
  // console.log(withRouter.props)
  return (
    <div className="App">
      {props.location.pathname !=='/' && <Nav/>}
      {/* <Nav/> */}
      {routes}
      {/* <Nav/> */}
    </div>
      
  )
}

export default withRouter(App);
