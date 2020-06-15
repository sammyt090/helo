import React, { Component } from "react";
import "./Dashboard.css";
import {withRouter} from 'react-router-dom'
import {getUser} from "../../ducks/reducer"
import Posts from './Posts'

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchPosts: "",
      isChecked: true,
      posts: [{
          title: 'Hello',
          img: '',

      }],
    };

    this.checkAddress = this.checkAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  checkAddress() {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    //   console.log(props)
    const { isChecked, searchPosts } = this.state;
    let mapPosts = this.state.posts.map((e) => <div><Posts e = {e} posts = {this.state.posts}/> </div>);
    return (
      <div>
        <input
          placeholder=""
          name="searchPosts"
          value={searchPosts}
          onChange={(event) => this.handleChange(event)}
        />
        <button className="post-buttons">Search</button>
        <button className="post-buttons">Reset</button>
        <div className="check-box">
          <label>My Posts</label>
          <input
            type="checkbox"
            name="isChecked"
            id="checkAddress"
            checked={isChecked}
            onChange={this.checkAddress}
          />
          {mapPosts}
        </div>
      </div>
    );
  }
}


export default withRouter(Dashboard)