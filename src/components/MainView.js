import React, { Component } from 'react';
import SideDetails from './SideDetails';
import SidePanel from './SidePanel';

export default class MainView extends Component {
  render() {
    return (<div className="wrapper">
      <SidePanel />
      <div className="main-view">Main View</div>
      <SideDetails />
    </div>)
  }
}