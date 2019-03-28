import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from './Weather';
import Images from './Images';
import Airports from './Airports';
import Places from './Places';


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
      case 'places':
        return <Places />
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
          <ul className="side-panel__list">
            <li onClick={() => this.toggleView('weather')}><i class="fas fa-sun"></i>Weather</li>
            <li onClick={() => this.toggleView('places')}><i class="fas fa-map-marked-alt"></i>Discover Places</li>
            <li onClick={() => this.toggleView('airports')}><i class="fas fa-plane-departure"></i>Find Airports</li>
            <li onClick={() => this.toggleView('images')}><i class="fas fa-camera"></i>Images</li>
          </ul>
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