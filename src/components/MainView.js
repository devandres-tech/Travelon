import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';

import Weather from './Weather';


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
      case 'places':
        return <h1>this is places!</h1>;
      case 'images':
        return <h1>this is images!</h1>;
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
              <li onClick={() => this.toggleView('places')}>Popular Places</li>
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