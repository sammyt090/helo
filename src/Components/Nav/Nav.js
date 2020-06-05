import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
export default class Nav extends Component{
    constructor(){
        super()
    }


    render(){
        

        return(
            <div className = "nav-box">
                < Link to = '/dashboard'>
                <button>Home</button>
                </Link>
                < Link to = '/post'>
                <button>New Post</button>
                </Link>
                < Link to = '/'>
                <button>Logout</button>
                </Link>
            </div>
        )
    }
}