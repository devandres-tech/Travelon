import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


export default class LandingPage extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();

    // make call to api..
    this.props.history.push('/main-view');
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Enter Country"
          type="text"
        />
      </form>
    )
  }
}
