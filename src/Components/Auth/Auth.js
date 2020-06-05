import React, { Component } from 'react'
import axios from 'axios'

export default class Auth extends Component{
    constructor(){
        super()

        this.state={
            username: '',
            password: ''
        }
    }

    handleChange(event) {
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    registerNewUser(username, password){
      const body = {username, password}
      axios.post('/auth/register', body).then((res) => {
        
         this.props.history.push('/dashboard')
        })
    }

    render(){

        return(
                <div className="loginContainer">
            <input
              placeholder="Username"
              name= "username"
              value={this.state.username}
            onChange={(event) => this.handleChange(event)}
            />
            <input
              placeholder="Password"
              name = "password"
              value={this.state.password}
             onChange={(event) => this.handleChange(event)}
            />
            {/* <button onClick={this.login}>Log In</button>
            <button onClick={this.register} id="reg">
              Register
            </button> */}
                <button>Login</button>
                <button onClick= {() => this.registerNewUser(this.state.username, this.state.password)}>Register</button>
            </div>
        )
    }
}