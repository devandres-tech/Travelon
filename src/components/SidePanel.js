
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import SideDetails from './SideDetails';

export default class SidePanel extends Component {



  render() {
    return (
      <div className="side-panel">
        <ul>
          <Link to='/main-view/weather'>Weather</Link>
        </ul>
      </div>
    )
  }
}

