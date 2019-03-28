import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { getWeather } from '../actions/index';


class Weather extends Component {

  state = {
    weather: []
  }

  componentWillMount() {
    const WEATHER_ROOT_UTL = 'https://api.openweathermap.org/data/2.5/forecast?'
    const WEATHER_KEY = '60271f8873cd6fca6c2b2ce6c281a2c6';
    const city = this.props.country[0].capital;
    const url = `${WEATHER_ROOT_UTL}&q=${city}&units=imperial&appid=${WEATHER_KEY}`;
    axios.get(url)
      .then(res => {
        console.log('res', res);
      })
  }

  render() {
    return (
      <div className="main-view">
        <h1>Hello</h1>
      </div>
    )
  }
}



const mapStateToProps = ({ weather, country }) => {
  return { weather, country }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getWeather }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather);

