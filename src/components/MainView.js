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

  reload = () => {
    window.location.reload();
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
        return <h1 className="main-view"></h1>
    }
  }

  render() {
    return (
      <>
        <div className="side-panel">
          <ul className="side-panel__list">
            <li onClick={() => this.toggleView('weather')}><i className="fas fa-sun"></i>Weather</li>
            <li onClick={() => this.toggleView('places')}><i className="fas fa-map-marked-alt"></i>Discover Places</li>
            <li onClick={() => this.toggleView('airports')}><i className="fas fa-plane-departure"></i>Find Airports</li>
            <li onClick={() => this.toggleView('images')}><i className="fas fa-camera"></i>Images</li>
            <li onClick={() => this.reload()}><i className="fas fa-home"></i>Search Country</li>
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
