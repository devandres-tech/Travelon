import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from './Weather';
import Images from './Images';
import Airports from './Airports';


class MainView extends Component {

  state = {
    toggleView: false,
    view: ''
  }

  toggleView = (currentView) => {
    this.setState({ view: currentView });
    this.setState({ toggleView: !this.state.toggleView });
  }

  renderSwitch(param) {
    switch (param) {
      case 'weather':
        return <Weather />
      case 'currency':
        return <h1>this is currency!</h1>;
      case 'airports':
        return <Airports />;
      case 'images':
        return <Images />
      default:
        return <h1 className="main-view">hello</h1>
    }
  }

  render() {
    return (
      <>
        <div className="side-panel">
          <div>
            <ul>
              <li onClick={() => this.toggleView('weather')}>Weather</li>
              <li onClick={() => this.toggleView('currency')}>Currency</li>
              <li onClick={() => this.toggleView('airports')}>Find Airports</li>
              <li onClick={() => this.toggleView('images')}>Images</li>
            </ul>
          </div>
        </div>
        {
          this.renderSwitch(this.state.view)
        }
      </>
    )
  }
}

const mapStateToProps = ({ country, weather }) => {
  return { country, weather }
}


export default connect(mapStateToProps)(MainView);