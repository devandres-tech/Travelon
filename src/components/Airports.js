import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

class Airports extends Component {
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
      })
  }

  render() {
    return (
      <div>
        <h1>hello airports</h1>
      </div>
    )
  }
}


const mapStateToProps = ({ country }) => {
  return { country }
}

export default connect(mapStateToProps)(Airports);