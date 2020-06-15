import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import {connect} from 'react-redux'
// import {username, profile_pic} from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'


function Nav (props){
    // constructor(props){
    //     super(props)
    // }


    // render(){
        // console.log(props)

        return(
            <div className = "nav-box">
                <img src = {`${props.profile_pic}`} alt="profile pic"/>
                <p>{`${props.username}`}</p>
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
// }


const mapStateToProps = reduxState => reduxState
// const {username} = initialState

export default connect(mapStateToProps)(withRouter(Nav))