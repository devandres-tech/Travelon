import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import WeatherDetail from './WeatherDetail';
import moment from 'moment';


class Weather extends Component {
  state = {
    forecastData: [],
    day: []
  }

  async componentWillMount() {
    const WEATHER_ROOT_UTL = 'https://api.openweathermap.org/data/2.5/forecast?'
    const WEATHER_KEY = '60271f8873cd6fca6c2b2ce6c281a2c6';
    const city = this.props.country[0].capital;
    const url = `${WEATHER_ROOT_UTL}&q=${city}&units=imperial&appid=${WEATHER_KEY}`;
    const res = await axios.get(url);

    for (let i = 0; i < res.data.list.length; i += 8) {
      this.state.forecastData.push(res.data.list[i])
    }
    const d = this.state.forecastData.map(function (d) {
      console.log("d is ", d);
      const date = new Date(d.dt_txt).toString().slice(0, 3);
      return <WeatherDetail
        key={d.dt}
        date={date}
        temp={d.main.temp} />
    })

    this.setState({ day: d })
  }

  render() {

    return (
      <div className="main-weather">
        {this.state.day}
      </div>
    )
  }
}


const mapStateToProps = ({ weather, country }) => {
  return { weather, country }
}


export default connect(mapStateToProps)(Weather);

