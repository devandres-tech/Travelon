import React, { Component } from 'react';
import SideDetails from './SideDetails';

export default class MainView extends Component {
  render() {
    return (<div className="wrapper">
      <div className="side-panel">Side Pannel</div>
      <div className="main-view">Main View</div>
      <SideDetails />
    </div>)
  }
}