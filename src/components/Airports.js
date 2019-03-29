import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import AirPortDetail from './AirPortDetail';

class Airports extends Component {
  state = {
    airport: [],
    airportView: ''
  }
  componentWillMount() {
    const URL = 'https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?'
    const city = this.props.country[0].capital;
    const url = `${URL}text=${city}`;
    axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "3ead468be9msh2340b1f4de722f0p1dd517jsn35fe31b5b2b6"
      }
    })
      .then(res => {
        console.log('res', res.data);
        const airportEl = res.data.map(function (place) {
          return <AirPortDetail name={place.name} />
        });

        this.setState({ airportView: airportEl });
      });
  }

  render() {
    return (
      <div>
        {this.state.airportView}
      </div>
    )
  }
}


const mapStateToProps = ({ country }) => {
  return { country }
}

export default connect(mapStateToProps)(Airports);